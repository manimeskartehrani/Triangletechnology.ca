import Button from "@/components/Button";

export default function LoginPage() {
  return (
    <main className="container max-w-md py-16">
      <h1 className="text-3xl font-bold mb-6">Log in</h1>
      <form className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full rounded-lg px-4 py-3 bg-white/10"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full rounded-lg px-4 py-3 bg-white/10"
        />
        <div className="gap-8 flex flex-col mt-3">
          <Button
            type="submit"
            text="Continue"
            className="w-full rounded-lg py-3 font-semibold"
          />
          <Button
            type="submit"
            text="Not a memeber yet?"
            className="w-full rounded-lg py-3 font-semibold"
          />
        </div>
      </form>
    </main>
  );
}
