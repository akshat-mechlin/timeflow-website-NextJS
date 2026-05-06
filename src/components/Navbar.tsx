import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-flow-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/assets/icon.png" alt="" className="h-9 w-9 rounded-xl shadow-lg shadow-flow-blue/20" width={36} height={36} />
          <span className="text-xl font-semibold tracking-tight text-white drop-shadow-[0_0_14px_rgba(74,105,255,0.5)]">Timeflow</span>
        </Link>

        <div className="hidden items-center gap-2 rounded-xl px-3 py-1.5 md:flex">
          <Link to="/features" className="rounded-lg px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-flow-card/70 hover:text-white">
            Features
          </Link>
          <Link to="/#how-it-works" className="rounded-lg px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-flow-card/70 hover:text-white">
            How it works
          </Link>
          <Link to="/pricing" className="rounded-lg px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-flow-card/70 hover:text-white">
            Pricing
          </Link>
          <Link to="/blogs" className="rounded-lg px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-flow-card/70 hover:text-white">
            Blogs
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="rounded-lg bg-flow-gradient px-4 py-2 text-sm font-medium text-white shadow-lg shadow-flow-purple/25 transition-opacity hover:opacity-95"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}
