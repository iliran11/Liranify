# Preparing CSV
    
    Required CSV Columns

  The CSV must have these 13 columns (header names converted to camelCase automatically):

  | Column              | Required     | Notes                                                    |
  |---------------------|--------------|----------------------------------------------------------|
  | internalId          | Optional     |                                                          |
  | supplierName        | Optional     |                                                          |
  | supplierId          | Yes          |                                                          |
  | invoiceId           | One of these |                                                          |
  | invoiceNumber       | required     | "Bill #" prefix is auto-stripped                         |
  | paymentCurrency     | Yes          |                                                          |
  | paymentMethod       | Optional     |                                                          |
  | paymentPlatformName | Conditional  | Required unless paymentMethod is "credit_card" or "cash" |
  | paymentDate         | Yes          | Format: YYYY-MM-DD or DD/MM/YYYY (auto-converted)        |
  | paymentReference    | Optional     |                                                          |
  | proofOfPaymentUrl   | Optional     |                                                          |
  | paymentAmount       | Yes          | Numeric value (can be 0)                                 |
  | category            | Optional     |                                                          |

  Validation Rules

  - paymentDate cannot be in the future
  - Either invoiceId or invoiceNumber must be provided (not both required)
  - Headers can be in snake_case or kebab-case (auto-converted to camelCase)

  Example CSV

  internalId,supplierName,supplierId,invoiceId,invoiceNumber,paymentCurrency,paymentMethod,paymentPlatformName,paymentDate,paymentReference,proofOfPaymentUrl,paymentAmount,category
  ,Supplier ABC,12345,,INV-001,USD,bank_transfer,Payoneer,2025-12-20,REF123,https://example.com/proof.pdf,1500.00,

  The code handling this is in app/scripts/payments-report/view.js:502-923.

  # Sending CSV
  ⏺ The CSV data is sent to:

  Full endpoint:
  POST {baseUrl}/_api/inventory/v2/supplier/upload-payments

  For production (based on the screenshot URL admin.bookaway.com), this would be:
  POST https://bookaway.com/_api/inventory/v2/supplier/upload-payments

  Request body:
  {
    "payments": [
      {
        "internalId": "...",
        "supplierName": "...",
        "supplierId": "...",
        "invoiceId": "...",
        "invoiceNumber": "...",
        "paymentCurrency": "USD",
        "paymentMethod": "...",
        "paymentPlatformName": "...",
        "paymentDate": "2025-12-20",
        "paymentReference": "...",
        "proofOfPaymentUrl": "...",
        "paymentAmount": 1500.00,
        "category": "..."
      }
    ],
    "validateAmounts": true  // optional, defaults to true
  }

  The backend handling this would be in the inventory service at route v2/supplier/upload-payments.

# payment service - upload payment

  Endpoint: POST /v2/supplier-payments/upload/payments

  1. Find Matching Invoices

  For each payment in the request, query MongoDB to find the invoice by invoiceNumber or invoiceId + supplierId

  2. Extract Topup Deposit Invoices

  Filter found invoices where invoiceType === 'topup_deposit'

  3. Validate Topup Invoices

  - Invoice not already paid
  - Payment currency matches supplier currency
  - No duplicate deposit already exists for this invoice

  4. Create Deposit Record

  Route Handler (supplier-payment.route.js:267)
      ↓
  uploadPayments.exec() (supplier-invoice.service.js:391)
      ↓
  applyPaidTopupInvoicesToSupplierBalance() (supplier-invoice.service.js:368)
      ↓
  addTopupItem() (supplier-topup.repository.js:96)

  Pushes to SupplierTopUpBalanceModel.topups[] array:
  {
    amount: payment.paymentAmount,
    supplierId: payment.supplierId,
    currency: payment.paymentCurrency,
    type: 'deposit',
    note: 'Deposit for topup invoice TD123',
    invoiceReference: invoice.invoiceNumber,
    receipt: payment.proofOfPaymentUrl,
    paymentDate: payment.paymentDate
  }

  5. Mark Invoice as Paid

  Update invoice status: 'paid' in SupplierInvoiceModel




