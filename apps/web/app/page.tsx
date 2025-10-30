import { prismaClient } from "db/client";
import { ReactElement } from "react";

export default async function Home(): Promise<ReactElement> {
  // `findMany()` returns a Promise — await it on the server so the component
  // receives the resolved data. Files in `app/` are Server Components by
  // default and can be async.
  const users = await prismaClient.user.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Web App
        </h1>
        <p className="text-center text-lg">
          Get started by editing{" "}
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
      </div>
      <div>
        <pre className="text-sm">{JSON.stringify(users, null, 2)}</pre>
      </div>
    </main>
  );
}
