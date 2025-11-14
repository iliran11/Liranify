import { Analytics } from "@vercel/analytics/react";
import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";
import Container from "./container";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Container>
          <Header />
        </Container>
        <main>{children}</main>
      </div>
      <Analytics />
      <Footer />
    </>
  );
};

export default Layout;
