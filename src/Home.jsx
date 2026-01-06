import React from "react";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 text-center">

      {/* ===== HERO SECTION ===== */}
      <h1 className="font-serifLogo text-7xl text-[var(--color-text)] italic mb-3 md:mb-0">
        Old River Soap
      </h1>

      {/* Dog Logo */}
      <img
        src="/dogo.png"
        alt="Old River Soap Co Dog Logo"
        className="mx-auto h-20 md:h-40 w-280 mb-0 opacity-85"
      />

      {/* Subtitle */}
      <p className="font-body text-lg text-[var(--color-primary)] tracking-wide mb-15">
        Small-batch, handmade soaps crafted with care and natural ingredients
      </p>

      {/* ===== SECTION NAVIGATION ===== */}
        <div className="
          mt-8
          flex 
          flex-col sm:flex-row 
          items-center justify-center 
          gap-3 sm:gap-25
          text-2xl sm:text-4xl font-bold
          font-serifLogo 
          text-[var(--color-text)]
          mb-25 sm:mb-40
        ">
          <a href="#featured" className="hover:opacity-70 transition underline underline-offset-4 decoration-[car(--color-secondary)] decoration-2">Featured Soaps</a>

          <span className="sm:hidden text-[var(--color-secondary)] text-4xl leading-none">❧</span>
          <span className="hidden sm:inline text-[var(--color-secondary)] text-4xl leading-none">❧</span>

          <a href="#mainstay" className="hover:opacity-70 transition underline underline-offset-4 decoration-[car(--color-secondary)] decoration-2">Mainstay Soaps</a>
          
          <span className="sm:hidden text-[var(--color-secondary)] text-4xl leading-none">❧</span>
          <span className="hidden sm:inline text-[var(--color-secondary)] text-4xl leading-none">❧</span>

          <a href="#other" className="hover:opacity-70 transition underline underline-offset-4 decoration-[car(--color-secondary)] decoration-2">Other Products</a>

          <span className="sm:hidden text-[var(--color-secondary)] text-4xl leading-none">❧</span>
          <span className="hidden sm:inline text-[var(--color-secondary)] text-4xl leading-none">❧</span>

          <a href="#nonfeatured" className="hover:opacity-70 transition underline underline-offset-4 decoration-[car(--color-secondary)] decoration-2">Non-Featured Soaps</a>
        </div>

      {/* ============================= */}
      {/* ===== FEATURED SECTION ====== */}
      {/* ============================= */}

      <section id="featured" className="scroll-mt-32 sm scroll-mt-24 mt-20">
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
              src="/Winter_woods.png"
              alt="Featured Soap 1"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Winter Woods</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Featured Soap #2 === */}
          <div className="product-card group">
            <img
              src="Pikes_peak.png"
              alt="Featured Soap 2"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Pikes' Peak</h3>
              <p className="text-sm opacity-80 mt-1">Peppermint • Eucalyptus • Coconut Oil</p>
            </div>
          </div>

          {/* === Featured Soap #3 === */}
          <div className="product-card group">
            <img
              src="Winter_spice.png"
              alt="Featured Soap 3"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Winter Spice</h3>
              <p className="text-sm opacity-80 mt-1">Peppermint • Eucalyptus • Coconut Oil</p>
            </div>
          </div>

          {/* === Featured Soap #4 === */}
          <div className="product-card group">
            <img
              src="/Fresh_cedar.png"
              alt="Featured Soap 4"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Oatmeal Milk & Honey</h3>
              <p className="text-sm opacity-80 mt-1">Peppermint • Eucalyptus • Coconut Oil</p>
            </div>
          </div>

          {/* === Featured Soap #5 === */}
          <div className="product-card group">
            <img
              src="Oatmeal_Milk_and_Honey.png"
              alt="Featured Soap 5"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Oatmeal Milk & Honey</h3>
              <p className="text-sm opacity-80 mt-1">Peppermint • Eucalyptus • Coconut Oil</p>
            </div>
          </div>

          {/* === Featured Soap #6 === */}
          <div className="product-card group">
            <img
              src="/Lavendar_Cedar_wood.png"
              alt="Featured Soap 6"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Lavendar Cedarwood</h3>
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

      <section id="mainstay" className="scroll-mt-32 sm scroll-mt-24 mt-20">
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
              src="/Bourbon_street.png"
              alt="Mainstay Soap 1"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Bourbon Street</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #2 === */}
          <div className="product-card group">
            <img
              src="/Eucalyptus_dreams.png"
              alt="Mainstay Soap 2"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Eucalyptus Dreams</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #3 === */}
          <div className="product-card group">
            <img
              src="/Lavendar_Patchouli.png"
              alt="Mainstay Soap 3"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Lavendar Patchouli</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #4 === */}
          <div className="product-card group">
            <img
              src="/Lavendar.png"
              alt="Mainstay Soap 4"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Lavendar</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #5 === */}
          <div className="product-card group">
            <img
              src="/Tea_Tree_and_charcoal.png"
              alt="Mainstay Soap 5"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Tea Tree & Charcoal</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #6 === */}
          <div className="product-card group">
            <img
              src="/Lavendar_Sea_Salt.png"
              alt="Mainstay Soap 6"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Lavendar Sea Salt</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #7 === */}
          <div className="product-card group">
            <img
              src="/Peppermint_Eucalyptus.png"
              alt="Mainstay Soap 6"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Peppermint Eucalyptus Sea Salt</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #8 === */}
          <div className="product-card group">
            <img
              src="/Milk_and_honey.png"
              alt="Mainstay Soap 6"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Milk & Honey</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Mainstay Soap #9 === */}
          <div className="product-card group">
            <img
              src="/Sea_salt.png"
              alt="Mainstay Soap 6"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Sea Salt</h3>
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

      <section id="other" className="scroll-mt-32 sm scroll-mt-24 mt-20">
        <h2 className="font-serifLogo text-4xl text-[var(--color-text)] mb-4">
          Other Products
        </h2>
        <p className="text-[var(--color-primary)] mb-10">
          Lotion, Lip Butter, and other products coming soon.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* === Other product #1 === */}
          <div className="product-card group">
            <img
              src="/Lotion_bar.png"
              alt="Misc product 1"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Lotion Bar</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Other product #2 === */}
          <div className="product-card group">
            <img
              src="/Lip_butter.png"
              alt="Misc product 2"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Lip Butter</h3>
              <p className="text-sm opacity-80 mt-1">Clove • Cinnamon • Shea Butter</p>
            </div>
          </div>

          {/* === Other product #3 === */}
          <div className="product-card group">
            <img
              src="/Board_butter.png"
              alt="Misc product 3"
              className="w-full h-48 object-cover rounded-t-[var(--radius-card)] transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="product-card-body">
              <h3 className="product-card-title">Board Butter</h3>
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
      {/* ===== NON FEATURED ======== */}
      {/* ============================= */}

      <section id="nonfeatured" className="scroll-mt-32 sm scroll-mt-24 mt-20">
        <h2 className="font-serifLogo text-4xl text-[var(--color-text)] mb-4">
          Non-Featured Soaps
        </h2>
        <p className="text-[var(--color-primary)] mb-10">
          Available in ~6 weeks by request.
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
        </div>
      </section>

      {/* Divider */}
      <div className="text-center my-20 text-3xl text-[var(--color-secondary)] font-serifLogo opacity-80">
        ❧
      </div>


    </main>
  );
}