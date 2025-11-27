import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


// Optional UI imports (keep your styling components if used)
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Contact from "./Contact";
import Home from "./Home";
import ScrollToTop from "./ScrollToTop";


// --- Main App Component ---
export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">

      <ScrollToTop />
      
      {/* Nav Bar*/}
      <nav className="fixed top-0 left-0 w-full bg-[var(--color-primary)] text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <h1 className="font-serifLogo text-3xl tracking-wide">
            Old River Soap Co.
          </h1>

          {/* Links */}
          <div className="flex gap-8 text-2xl font-serifLogo font-bold">
            {location.pathname === "/" ? (
              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  })
                }
                className="hover:opacity-80 transition"
              >
                Home / Products
              </button>
            ) : (
              <Link to="/" className="hover:opacity-80 transition">
                Home / Products
              </Link>
            )}

            <Link to="/contact" className="hover:opacity-80 transition">
              Contact / Order
            </Link>
          </div>

        </div>
      </nav>

      {/* Page content */}
      <div className="flex-grow text-slate-900 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--color-card)] text-[var(--color-text)] mt-12">
        <div className="w-full h-[2px] bg-[var(--color-secondary)]"></div>
        <div className="max-w-6xl mx-auto text-center text-sm tracking-wide">

          <p className="font-serifLogo text-xl mb-2">
            Old River Soap Co.
          </p>

          <p className="mb-2">
            Handmade with ❤️ • Massena, NY
          </p>

          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} Old River Soap Co. All rights reserved.
          </p>

        </div>
      </footer>
    </div>
  );
}