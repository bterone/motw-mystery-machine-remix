import { Form, Link } from "@remix-run/react";

export default function DashboardLayout({ children }: { children: any }) {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold">
          {/* TODO: Replace with Logo */}
          <Link to="/">Mystery Machine</Link>
        </h1>
        <Form action="/logout" method="post">
          <button type="submit" className="rounded text-xl">
            Logout
          </button>
        </Form>
      </header>

      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50">
          <Link to="/mysteries" className="block p-4 text-xl">
            Mysteries
          </Link>
        </div>

        <div className="flex-1 p-6">{children}</div>
      </main>
    </div>
  );
}
