import Form from "@/components/Form";

const API_URL = "http://localhost:8080";

export default async function Home({ searchParams: { search } }) {
  const res = await fetch(`${API_URL}/test?data=${search}`, {
    cache: "no-cache",
  });
  const body = await res.text();

  return (
    <main>
      <h1>{body}</h1>
      <Form />
    </main>
  );
}
