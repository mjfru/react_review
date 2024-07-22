import Link from "next/link";
import Counter from "../components/Counter";
import "./global.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <h3>Our Header</h3>
        </header>
        {children}
        <footer className="site-footer">
          <p>Our Footer</p>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <Counter/>
        </footer>
      </body>
    </html>
  );
}
