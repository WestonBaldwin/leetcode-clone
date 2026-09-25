import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Code Submission" },
    { name: "description", content: "Submit code" },
  ];
}

export default function Home() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const code = form.get("code");

    const response = await fetch("http://localhost:8000/submit-solution", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const result = await response.json();

    console.log(result);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="code" />
      <button type="submit">Submit Code</button>
    </form>
  );
}