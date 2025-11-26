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
      <h1 className="font-serifLogo text-4xl mb-6 text-center">
        Thank you for visiting ☺️ Whether you’d like to place an order or have a question, we’re here to help!
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5b2333]"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5b2333]"
        />

        <textarea
          name="message"
          placeholder="Your message or order details. Add phone number if desired."
          required
          className="w-full px-4 py-2 border border-slate-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#5b2333]"
        />

        <button type="submit" className="btn-primary w-full mt-4">
            Send Message
            </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-green-700 font-medium">{status}</p>
      )}
    </div>
  );
}