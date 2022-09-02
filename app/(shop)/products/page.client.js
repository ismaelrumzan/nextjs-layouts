import Link from "next/link";

export default function Products() {
  return (
    <>
      <h1>All Products Page</h1>
      <ul>
        <li>
          <Link href="/products/product1">
            <a>Product 1</a>
          </Link>
        </li>
        <li>
          <Link href="/products/product1">
            <a>Product 2</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
