import { useEffect, useState } from "react";

useState;
export default function Account() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <>
      <h1>My Profile Page</h1>
      <h2>User Data</h2>
    </>
  );
}
