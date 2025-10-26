# 🎯 Goal

- Analyze codebase and generate Mermaid diagrams showing high-level data flow
- Track data from API calls → database operations → processing logic
- Highlight concurrent operations and async patterns
- Visualize the data transformation pipeline

# 📊 Level of Detail

- **High-level design and flow** - focus on system components and their interactions
- Skip implementation details and focus on architectural flow
- Show main data transformations, not individual variable assignments

# 🔍 Key Distinctions

- **Database calls** - clearly mark as database operations (queries, inserts, updates)
- **External requests** - clearly mark as HTTP/API calls to external services
- Use different visual styling or labels to distinguish these two types

# 🎨 Diagram Style

- Use Mermaid flowchart or sequence diagram format
- Label edges with data types being passed (e.g., "user data", "query results")
- Use parallel/concurrent notation for async operations
- Group related operations into logical blocks

## Visual Representations

**Database Operations:**

- Use cylinder shape `[(Database)]` for database nodes
- Label operations clearly: `[(Users DB)]`, `[(Cache)]`, `[(Analytics DB)]`
- Show query type on edges: "SELECT", "INSERT", "UPDATE", "DELETE"
- Example: `API -->|"INSERT user"| [(Users DB)]`

**Cronjobs/Scheduled Tasks:**

- Use hexagon shape `{{"Cronjob Name"}}` for scheduled tasks
- Include schedule frequency in label: `{{"Cleanup Job (daily)"}}`
- Show trigger with dotted line: `Timer -.->|"every 24h"| {{"Cleanup"}}`
- Clearly mark as background/async processes

**External Requests:**

- Use rectangle with rounded edges `([External API])`
- Label with service name: `([Stripe API])`, `([SendGrid])`
- Show HTTP method on edges: "POST", "GET", etc.

# 📝 Output Format

- **Do NOT output the Mermaid chart code to console**
- Write the diagram to a `.mmd` file (or embed in a Python/markdown file if requested)
- After completion, announce with: "Finished creating the chart. Please check in {filepath/filename}"
- Keep the announcement short and direct

# ⚠️ Gotchas

- Don't overwhelm with low-level function calls
- Focus on the "what" (data flow) not the "how" (implementation)
- Clearly differentiate synchronous vs asynchronous flows
- Mark critical paths and bottlenecks if apparent
