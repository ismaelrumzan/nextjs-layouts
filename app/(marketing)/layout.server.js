import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Website</title>
      </head>
      <body>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact us</a>
            </Link>
          </li>
          <li>
            <Link href="/account">
              <a>Your profile</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </li>
        </ul>
        {children}
        <p>Please don't copy my site :)</p>
      </body>
    </html>
  );
}
