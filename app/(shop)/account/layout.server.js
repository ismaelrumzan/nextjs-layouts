import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <>
      <h3>Manage Account</h3>
      <ul>
        <li>
          <Link href="/">
            <a>Reset Password</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Change Email</a>
          </Link>
        </li>
      </ul>
      <div>{children}</div>
    </>
  );
}
