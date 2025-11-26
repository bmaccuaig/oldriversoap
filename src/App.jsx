import React from "react";
import { Routes, Route, Link } from "react-router-dom";

//product cards
// <div className="product-card">
//  <img src="/soap.jpg" />
//  <div className="product-card-body">
//    <h3 className="product-card-title">Lavender Sage</h3>
//    <p className="product-card-price">$6.00</p>
//  </div>
//</div>

//buttons
//<button className="btn-primary">Buy Now</button>
//<button className="btn-secondary">Learn More</button>

//headings
//<h1 className="text-h1 font-serifLogo">...</h1>
//<h2 className="text-h2 font-serifLogo">...</h2>


// Optional UI imports (keep your styling components if used)
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Contact from "./Contact"

// --- Individual pages ---
function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 text-center">
      <h1 className="font-serifLogo text-7xl text-[var(--color-text)] italic mb-4">
        Old River Soap
      </h1>

    
      <img
        src="/dog-logo.png"
        alt="Old River Soap dog logo"
        className="mx-auto w-32 mb-2 opacity-95"
      />


      <p className="font-body text-lg text-[var(--color-primary)] tracking-wide">
        Small-batch, handmade soaps crafted with care and natural ingredients
      </p>
    </main>
  );
}


// --- Main App Component ---
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF9F8]">

      {/* Top info bar */}
      <div className="w-full bg-[var(--color-card)] text-[var(--color-text)]">
        <div className="max-w-6xl mx-auto px-4 py-2 text-center">

          <p className="font-serifLogo text-xl tracking-wide">
            Official website opening • Handcrafted small-batch soap
          </p>

        </div>
      </div>

      {/* Nav Bar*/}
      <nav className="w-full bg-[var(--color-primary)] text-white shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <h1 className="font-serifLogo text-3xl tracking-wide">
            Old River Soap Co.
          </h1>

          {/* Links */}
          <div className="flex gap-8 text-lg font-medium">
            <Link to="/" className="hover:opacity-80 transition">
              Home / Products
            </Link>

            <Link to="/contact" className="hover:opacity-80 transition">
              Contact / Order
            </Link>
          </div>

        </div>
      </nav>

      {/* Page content */}
      <div className="flex-grow text-slate-900">
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