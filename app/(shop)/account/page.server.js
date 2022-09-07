export async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    props: { a: "b" },
  };
}

export default function Account() {
  return (
    <>
      <h1>My Profile Page</h1>
      <h2>User Data</h2>
    </>
  );
}
