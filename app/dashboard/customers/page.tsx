export default async function Page(props) {
  const t = await props.params;

  console.log(t);

  return <p>Customers Page</p>;
}
