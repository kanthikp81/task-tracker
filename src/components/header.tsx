import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-black bg-white shadow-md">
      <h1 className="text-2xl tracking-wide font-extrabold">TASK TRACKER</h1>
      <nav className="space-x-4">
        <ul className="font-medium flex flex-row" >
          <li>
            <Link href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 ">Home</Link>

          </li>
          <li>
            <Link href="/tasks-page" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100">Tasks</Link>
          </li>
        </ul>



      </nav>
    </header>
  );
}
