import React from "react";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 text-center">

      {/* ===== HERO SECTION ===== */}
      <h1 className="font-serifLogo text-7xl text-[var(--color-text)] italic mb-0">
        Old River Soap
      </h1>

      {/* Dog Logo */}
      <img
        src="/dog-logo.png"
        alt="Old River Soap Co Dog Logo"
        className="mx-auto w-30 mb-0 opacity-95"
      />

      {/* Subtitle */}
      <p className="font-body text-lg text-[var(--color-primary)] tracking-wide mb-15">
        Small-batch, handmade soaps crafted with care and natural ingredients
      </p>

      {/* ===== SECTION NAVIGATION ===== */}
      <div className="mt-8 flex justify-center gap-25 font-bold text-4xl font-serifLogo text-[var(--color-text)] mb-40">
        <a href="#featured" className="hover:opacity-70 transition">Featured Soaps</a>
        <a href="#mainstay" className="hover:opacity-70 transition">Mainstay Soaps</a>
        <a href="#other" className="hover:opacity-70 transition">Other Products</a>
      </div>

      {/* ============================= */}
      {/* ===== FEATURED SECTION ====== */}
      {/* ============================= */}

      <section id="featured" className="mt-20">
        <h2 className="font-serifLogo text-4xl text-[var(--color-text)] mb-4">
          Featured & Seasonal Soaps
        </h2>
        <p className="text-[var(--color-primary)] mb-10">
          Limited releases and seasonal specials.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="product-card group">
              <div className="w-full h-48 bg-[var(--color-bg)] flex items-center justify-center transition-opacity duration-300 group-hover:opacity-80">
                <span className="opacity-40 font-serifLogo text-xl">Image</span>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">Seasonal Soap</h3>
                <p className="text-sm opacity-80 mt-1">Ingredients list here</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="text-center my-20 text-3xl text-[var(--color-secondary)] font-serifLogo opacity-80">
        ❧
      </div>

      {/* ============================= */}
      {/* ===== MAINSTAY SECTION ====== */}
      {/* ============================= */}

      <section id="mainstay">
        <h2 className="font-serifLogo text-4xl text-[var(--color-text)] mb-4">
          Mainstay Soaps
        </h2>
        <p className="text-[var(--color-primary)] mb-10">
          Our best-selling classic scents.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="product-card group">
              <div className="w-full h-48 bg-[var(--color-bg)] flex items-center justify-center transition-opacity duration-300 group-hover:opacity-80">
                <span className="opacity-40 font-serifLogo text-xl">Image</span>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">Mainstay Soap</h3>
                <p className="text-sm opacity-80 mt-1">Ingredients list here</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="text-center my-20 text-3xl text-[var(--color-secondary)] font-serifLogo opacity-80">
        ❧
      </div>

      {/* ============================= */}
      {/* ===== OTHER PRODUCTS ======== */}
      {/* ============================= */}

      <section id="other" className="mb-12">
        <h2 className="font-serifLogo text-4xl text-[var(--color-text)] mb-4">
          Other Products
        </h2>
        <p className="text-[var(--color-primary)] mb-10">
          Lip balms, lotion bars, scrubs, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="product-card group">
              <div className="w-full h-48 bg-[var(--color-bg)] flex items-center justify-center transition-opacity duration-300 group-hover:opacity-80">
                <span className="opacity-40 font-serifLogo text-xl">Image</span>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">Product</h3>
                <p className="text-sm opacity-80 mt-1">Ingredients list here</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}