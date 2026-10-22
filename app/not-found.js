import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="not-found" id="main-content" tabIndex={-1}>
        <div className="wrap">
          <div className="kicker">
            <b>404</b> Missing page
          </div>
          <h1>This one is not in the stack.</h1>
          <p>The page you were looking for does not exist. The work is still here.</p>
          <Link className="btn" href="/#work">
            See selected work <span className="arrow">↗</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
