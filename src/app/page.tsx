import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/meals" className="text-2xl font-bold text-center">Meals</Link>
      <Link href="/community" className="text-2xl font-bold text-center">Community</Link>
      <Link href="/meals/share" className="text-2xl font-bold text-center">Share</Link>

    </div>
  );
}
