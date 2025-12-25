import Button from "@/components/Button";

export default function SignupPage() {
  return (
    <main className="container max-w-md py-16">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <form className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full rounded-lg px-4 py-3 bg-white/10"
        />

        <Button
          type="submit"
          text="Continue"
          className="w-full rounded-lg py-3 font-semibold"
        />
      </form>
    </main>
  );
}
