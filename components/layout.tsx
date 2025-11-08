import { Analytics } from "@vercel/analytics/react";
import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Navigation from "./navigation";

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
        <Navigation />
        <main>{children}</main>
      </div>
      <Analytics />
      <Footer />
    </>
  );
};

export default Layout;
