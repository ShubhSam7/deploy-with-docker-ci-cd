import {prismaClient} from 'db/client'

export default function Home() {
  const user = prismaClient.user.findMany();
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
        {JSON.stringify(user)}
      </div>
    </main>
  );
}