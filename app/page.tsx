import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-sm text-red-600 md:text-3xl md:text-blue-400 lg:text-9xl lg:text-green-400" > Hello World!!! </span>
      <Link href={'/home'} > Explorar </Link>
    </main>
  );
}
