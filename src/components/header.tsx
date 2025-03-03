import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-black bg-white shadow-md">
      <h1 className="text-2xl tracking-wide font-extrabold">TASK TRACKER</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/tasks-page">Tasks</Link>
      </nav>
    </header>
  );
}
