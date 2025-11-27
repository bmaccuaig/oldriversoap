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
        src="/dogo.png"
        alt="Old River Soap Co Dog Logo"
        className="mx-auto h-40 w-280 mb-0 opacity-85"
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

          {/* === Featured Soap #1 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Featured Soap 1"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Featured Soap #2 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Featured Soap 2"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Winter Mint</h3>
              <p className="text-sm opacity-80 mt-1">Peppermint • Eucalyptus • Coconut Oil</p>
            </div>
          </div>

          {/* === Featured Soap #3 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Featured Soap 3"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Winter Mint</h3>
              <p className="text-sm opacity-80 mt-1">Peppermint • Eucalyptus • Coconut Oil</p>
            </div>
          </div>

          {/* === Featured Soap #4 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Featured Soap 4"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Winter Mint</h3>
              <p className="text-sm opacity-80 mt-1">Peppermint • Eucalyptus • Coconut Oil</p>
            </div>
          </div>

          {/* === Featured Soap #5 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Featured Soap 5"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Winter Mint</h3>
              <p className="text-sm opacity-80 mt-1">Peppermint • Eucalyptus • Coconut Oil</p>
            </div>
          </div>

          {/* === Featured Soap #6 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Featured Soap 6"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Winter Mint</h3>
              <p className="text-sm opacity-80 mt-1">Peppermint • Eucalyptus • Coconut Oil</p>
            </div>
          </div>
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

          {/* === Mainstay Soap #1 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Mainstay Soap 1"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #2 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Mainstay Soap 2"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #3 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Mainstay Soap 3"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #4 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Mainstay Soap 4"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #5 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Mainstay Soap 5"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #6 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Mainstay Soap 6"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

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

          {/* === Other product #1 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Misc product 1"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Other product #2 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Misc product 2"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Other product #3 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Misc product 3"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Other product #4 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Misc product 4"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Other product #5 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Misc product 5"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Other product #6 === */}
          <div className="product-card group">
            <img
              src="/soap.jpg"
              alt="Misc product 6"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pumpkin Spice</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="text-center my-20 text-3xl text-[var(--color-secondary)] font-serifLogo opacity-80">
        ❧
      </div>

    </main>
  );
}