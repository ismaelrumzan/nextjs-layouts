import Link from "next/link";

export default function Products() {
  return (
    <>
      <h1>Product 2</h1>
      <Link href="/checkout">
        <a>Add to Cart</a>
      </Link>
    </>
  );
}
