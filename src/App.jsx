import { useMemo, useState } from "react";
import {
  ShoppingBag,
  Sparkles,
  Leaf,
  Recycle,
  Mail,
  Phone,
  MapPin,
  Stars,
  ShieldCheck,
  BadgeCheck,
  Search,
  Filter,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

// --- Mock data ---
const PRODUCTS = [
  {
    id: "oat-honey",
    name: "Oat & Honey Calm Bar",
    price: 8,
    scentNotes: ["Warm oats", "Wildflower honey", "Vanilla"],
    image:
      "/soap.jpg",
    tags: ["gentle", "sensitive skin", "unscented base"],
    bestSeller: true,
    description: "Small-batch bar made with colloidal oatmeal and raw honey.",
    ingredients: ["Olive oil", "Coconut oil", "Shea butter", "Castor oil", "Oatmeal", "Honey"],
    weight: "4.5 oz",
  },
  {
    id: "citrus-sunrise",
    name: "Citrus Sunrise",
    price: 9,
    scentNotes: ["Sweet orange", "Grapefruit", "Lemon zest"],
    image:
      "https://images.unsplash.com/photo-1615485737651-6b54d01cbf3e?q=80&w=1400&auto=format&fit=crop",
    tags: ["energizing", "essential oils"],
    bestSeller: false,
    description: "Bright, zesty citrus essential oils in a silky, bubbly bar.",
    ingredients: ["Olive oil", "Coconut oil", "Shea butter", "Castor oil", "Orange EO", "Grapefruit EO"],
    weight: "4.5 oz",
  },
  {
    id: "lavender-fields",
    name: "Lavender Fields",
    price: 9,
    scentNotes: ["French lavender", "Herbal", "Soft woods"],
    image:
      "https://images.unsplash.com/photo-1603714228680-5921f15a69a7?q=80&w=1400&auto=format&fit=crop",
    tags: ["classic", "soothing", "floral"],
    bestSeller: true,
    description: "A spa-day staple: calming lavender in a rich, conditioning bar.",
    ingredients: ["Olive oil", "Coconut oil", "Shea butter", "Castor oil", "Lavender EO"],
    weight: "4.5 oz",
  },
];

const REVIEWS = [
  { id: 1, name: "Janelle", body: "Best lavender bar I've tried.", rating: 5 },
  { id: 2, name: "Kara", body: "Citrus Sunrise wakes me right up!", rating: 5 },
  { id: 3, name: "Maya", body: "The oat & honey bar is super gentle.", rating: 4 },
];

const POLICIES = [
  { title: "Handmade & Small Batch", icon: Sparkles, body: "Poured and cut by hand, then cured for 4–6 weeks." },
  { title: "Skin-Friendly Ingredients", icon: Leaf, body: "Simple, effective oils and butters—no harsh detergents." },
  { title: "Low-Waste Packaging", icon: Recycle, body: "Recyclable/compostable wraps and labels." },
  { title: "Satisfaction Promise", icon: ShieldCheck, body: "If something's off, we'll make it right." },
];

function StarsRow({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Stars key={i} className={`h-4 w-4 ${i < rating ? "" : "opacity-30"}`} />
      ))}
    </div>
  );
}

function ProductCard({ p, onQuickView, onAdd }) {
  return (
    <Card className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-lg">
          {p.name}
          {p.bestSeller && <Badge variant="secondary">Best Seller</Badge>}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        <div className="flex flex-wrap gap-1">
          {p.tags.map((t) => (
            <Badge key={t} variant="outline" className="capitalize">
              {t}
            </Badge>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">Notes:</span> {p.scentNotes.join(" • ")}
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="text-xl font-semibold">${p.price.toFixed(2)}</div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onQuickView(p)}>
              Details
            </Button>
            <Button onClick={() => onAdd(p)} className="gap-2">
              <ShoppingBag className="h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PolicyCard({ title, body, icon: Icon }) {
  return (
    <Card className="h-full rounded-2xl">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5" />
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">{body}</CardContent>
    </Card>
  );
}

export default function SoapShop() {
  const [query, setQuery] = useState("");
  const [openProduct, setOpenProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter((p) =>
      [p.name, p.description, p.tags.join(" "), p.scentNotes.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  function addToCart(p) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === p.id);
      if (existing) return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id: p.id, name: p.name, price: p.price, qty: 1 }];
    });
    toast("Added to cart");
    setCartOpen(true);
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6" />
            <div className="leading-tight">
              <div className="font-bold tracking-tight text-lg">Old River Soap Co.</div>
              <div className="text-xs text-muted-foreground">Handmade • Palm-Free • Small-Batch</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 w-[380px]">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className="pl-9"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <Sheet open={cartOpen} onOpenChange={setCartOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <ShoppingBag className="h-5 w-5" /> Cart ({cart.reduce((s, i) => s + i.qty, 0)})
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[420px]">
              <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                {cart.length === 0 && (
                  <div className="text-sm text-muted-foreground">Your cart is empty.</div>
                )}
                {cart.map((i) => (
                  <div key={i.id} className="flex items-center justify-between border rounded-xl p-3">
                    <div>
                      <div className="font-medium">{i.name}</div>
                      <div className="text-sm text-muted-foreground">Qty: {i.qty}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="font-semibold">${(i.price * i.qty).toFixed(2)}</div>
                      <Button size="icon" variant="ghost" onClick={() => removeFromCart(i.id)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <SheetFooter className="mt-6">
                <div className="w-full space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Subtotal</div>
                    <div className="text-lg font-semibold">${subtotal.toFixed(2)}</div>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => toast("Connect Stripe or Snipcart for checkout")}
                  >
                    Checkout
                  </Button>
                  <div className="text-xs text-muted-foreground text-center">
                    Secure checkout powered by Stripe
                  </div>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Nourish your skin with{" "}
              <span className="underline decoration-wavy underline-offset-4 decoration-amber-400">
                small-batch
              </span>{" "}
              soaps
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Thoughtfully crafted bars using simple, skin-loving ingredients.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#shop">
                <Button size="lg">Shop Soaps</Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline">
                  Wholesale / Custom
                </Button>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <BadgeCheck className="h-4 w-4" /> Cold-process • Cruelty-free • Made locally
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1626947348404-7a8e2568a2c1?q=80&w=1600&auto=format&fit=crop"
                alt="Handmade soap display"
                className="rounded-3xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow p-3 flex items-center gap-2">
                <Leaf className="h-4 w-4" /> Plant-based oils
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policies */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="grid md:grid-cols-4 gap-4">
          {POLICIES.map((p) => (
            <PolicyCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Shop Soaps</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} onQuickView={setOpenProduct} onAdd={addToCart} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">What customers say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.id} className="space-y-2">
                <StarsRow rating={r.rating} />
                <p className="text-sm">“{r.body}”</p>
                <div className="text-xs text-muted-foreground">— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-3">Our story</h2>
            <p className="text-muted-foreground">
              We started in a tiny kitchen with a big love for simple, nourishing ingredients. Each
              bar is crafted slowly and cured properly for a gentle, long-lasting clean. We keep our
              recipes palm-free and our packaging minimal so your skin (and the planet) can breathe
              easier.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="rounded-2xl">
              <CardContent className="p-4 text-sm">
                <BadgeCheck className="h-4 w-4 inline mr-2" /> Palm-Free
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-4 text-sm">
                <Leaf className="h-4 w-4 inline mr-2" /> Often Vegan
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-4 text-sm">
                <Recycle className="h-4 w-4 inline mr-2" /> Low-Waste
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-4 text-sm">
                <ShieldCheck className="h-4 w-4 inline mr-2" /> Small-Batch QC
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact (Google Form) */}
      <section id="contact" className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-3xl border bg-white p-6 md:p-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Contact / Wholesale</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Fill out the form below and we’ll get back to you.
          </p>
          <iframe
            src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"
            width="100%"
            height="720"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact form"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* Quick view */}
      <Dialog open={!!openProduct} onOpenChange={(o) => !o && setOpenProduct(null)}>
        <DialogContent className="sm:max-w-[720px]">
          {openProduct && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={openProduct.image}
                  alt={openProduct.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{openProduct.name}</DialogTitle>
                </DialogHeader>
                <div className="mt-2 text-muted-foreground">{openProduct.description}</div>
                <div className="mt-4 space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Scent notes:</span>{" "}
                    {openProduct.scentNotes.join(" • ")}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Ingredients:</span>{" "}
                    {openProduct.ingredients.join(", ")}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Weight:</span> {openProduct.weight}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-2xl font-bold">${openProduct.price.toFixed(2)}</div>
                  <Button className="gap-2" onClick={() => addToCart(openProduct)}>
                    <ShoppingBag className="h-4 w-4" /> Add to cart
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t mt-8">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-lg">Old River Soap Co.</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Handmade soaps with simple, skin-loving ingredients.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-2">Quick Links</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <a href="#shop" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Wholesale / Custom
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-2">Policies</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>Shipping: 3–5 business days</li>
              <li>Returns: 14-day window</li>
              <li>Ingredients & Allergens listed per product</li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-2">Contact</div>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> oldriversoapco@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Springfield, USA
              </li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-center text-muted-foreground pb-6">
          © {new Date().getFullYear()} Old River Soap Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
