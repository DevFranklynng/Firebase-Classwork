import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#1d1d1f] px-6 py-12 text-white md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">Veloura Beauty</h2>
          <p className="mt-3 max-w-sm text-sm text-gray-400">
            Beauty that speaks for you.
          </p>
        </div>

        <div className="flex gap-8 text-sm">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2026 Veloura Beauty. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
