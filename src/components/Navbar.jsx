import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingBag } from "lucide-react";
import { useCartCount } from "../store/cartStore";

function Navbar() {
  const cartCount = useCartCount();
  const navLinkStyle = ({ isActive }) =>
    `transition hover:text-gray-500 ${isActive ? "font-semibold" : ""}`;

  return (
    <header className="bg-[#f7f3eb] px-6 pt-6 md:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-5">
        <Link to="/" className="text-xl font-bold tracking-tight md:text-2xl">
          Veloura Beauty.
        </Link>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/shop" className={navLinkStyle}>Shop</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Search"><Search size={20} /></button>
          <Link to="/cart" aria-label="Shopping bag" className="relative">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="rounded-full border border-black px-5 py-2 text-sm transition hover:bg-black hover:text-white">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
