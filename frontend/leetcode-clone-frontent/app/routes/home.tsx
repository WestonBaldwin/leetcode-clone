export default function Home() {
  async function submitCode(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const code = new FormData(form).get("code");

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
    <form onSubmit={submitCode}>
      <input type="text" name="code" />
      <button type="submit">Submit Code</button>
    </form>
  );
}