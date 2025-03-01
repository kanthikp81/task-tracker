import Link from "next/link";
import Image from "next/image";
import taskLogo from "/public/next.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-black bg-white shadow-md">
      <Image src={taskLogo} alt="Qantas Logo" height={40} />
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/tasks">Tasks</Link>
      </nav>
    </header>
  );
}