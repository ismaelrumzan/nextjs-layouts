import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Cart</title>
      </head>
      <body>
        <>
          <Link href="/products">
            <a>Back to Products</a>
          </Link>
          <div>{children}</div>
        </>
      </body>
    </html>
  );
}
