import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found — CompressTo20KB',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center bg-white text-slate-900">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-slate-600 mb-8">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
        Back to Home
      </Link>
    </div>
  );
}
