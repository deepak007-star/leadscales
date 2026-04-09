import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-6">
        <p className="text-8xl font-heading font-bold gradient-text mb-4">404</p>
        <h1 className="font-heading text-2xl font-bold text-white mb-2">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-pill btn-pill-primary inline-flex"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
