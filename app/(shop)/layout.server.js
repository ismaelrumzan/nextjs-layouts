import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Shop</title>
      </head>
      <body>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
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
        <div>{children}</div>
        <p>For support, go here</p>
      </body>
    </html>
  );
}
