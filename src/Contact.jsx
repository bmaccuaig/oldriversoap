import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // Send to Google Apps Script
    await fetch("https://script.google.com/macros/s/AKfycbyK3eJ-DTR3oZcZTCK4XS6FNw5ya857CwF3YIKkSbEk7E4BTy-dgG6IUktR8QmMfVYIog/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setStatus("Message sent!");
    e.target.reset();
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="font-serifLogo text-4xl mb-6 text-center ">
        Thank you for visiting ☺️ Whether you’d like to place an order or have a question, we’re here to help!
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-white border border-[var(--color-primary)]/30 rounded-lg p-3 w-full 
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="bg-white border border-[var(--color-primary)]/30 rounded-lg p-3 w-full 
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
        />

        <textarea
          name="message"
          placeholder="Your message or order details. Add phone number if desired. We will reach out soon!"
          required
          className="bg-white border border-[var(--color-primary)]/30 rounded-lg p-3 w-full h-32 resize-none 
               focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
        />

        <button type="submit" className="btn-primary w-full mt-6 text-2xl">
            Send Message
            </button>
      </form>

      {/* ===== VENMO SECTION ===== */}
      <div className="mt-16 text-center">

        {/* Row 1 — Title */}
        <h3 className="font-serifLogo text-3xl font-bold text-[var(--color-text)] mb-2">
          Venmo
        </h3>

        {/* Row 2 — Name + Username */}
        <p className="font-body text-xl text-[var(--color-primary)] mb-6">
          Shannon MacCuaig — <span className="font-semibold">@smaccuaig</span>
        </p>

        {/* Row 3 — Profile Picture + QR Code */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">

          {/* Profile photo */}
          <img
            src="/gus.png"
            alt="Venmo Profile"
            className="w-40 h-40 rounded-full shadow-md object-cover"
          />

          {/* QR Code */}
          <img
            src="/momvenmo.png"
            alt="Venmo QR Code"
            className="w-40 h-40 shadow-md rounded-lg"
          />

        </div>
      </div>



      {status && (
        <p className="mt-4 text-center text-green-700 font-medium">{status}</p>
      )}
    </div>
  );
}