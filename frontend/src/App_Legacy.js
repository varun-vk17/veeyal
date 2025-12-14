import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
  Star,
  Check,
  Leaf,
  Droplets,
  Heart,
  ShieldCheck,
  ChefHat,
  Utensils,
  Sprout,
  Thermometer,
  Ban,
  Clock,
  ArrowRight,
  AlertTriangle,
  FlaskConical
} from 'lucide-react';
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./components/ui/sheet";
import { Card, CardContent } from "./components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";

// --- MOCK DATA ---
const PRODUCTS = [
  {
    id: 1,
    name: "Wood-Pressed Groundnut Oil",
    tagline: "Perfect for deep frying & daily curry",
    price: 349,
    image: "https://images.unsplash.com/photo-1757801333068-d52a3e448cde?q=80&w=1000&auto=format&fit=crop",
    description: "Extracted from premium organic peanuts using traditional wood-pressing (Chekka Ganuga). High smoke point for Indian cooking.",
    benefits: ["High smoke point", "Nutty aroma", "Zero cholesterol"],
    bestFor: "Best for Daily Cooking",
    badge: "⭐ MOST FAMILIES START HERE",
    nudge: "Best first switch from refined oil",
    micro: "Ideal for daily South Indian cooking"
  },
  {
    id: 2,
    name: "Pure Sesame Oil",
    tagline: "For tempering & idli podi",
    price: 399,
    image: "https://images.unsplash.com/photo-1615174111664-cbe2de69ed9d?q=80&w=1000&auto=format&fit=crop",
    description: "Traditional Gingelly oil. Perfect for dosas, pickles, and oil pulling. Rich in antioxidants.",
    benefits: ["Rich flavor", "Natural antioxidants", "Traditional taste"],
    bestFor: "Best for Tempering"
  },
  {
    id: 3,
    name: "Virgin Coconut Oil",
    tagline: "Kerala coconut goodness",
    price: 449,
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=1000&auto=format&fit=crop",
    description: "Extracted from fresh coconut milk. Ideal for Kerala cuisine, raw consumption, and hair care.",
    benefits: ["Fresh aroma", "Cold processed", "Multipurpose"],
    bestFor: "Best for Raw Use & Hair"
  }
];

const REVIEWS = [
  { id: 1, name: "Priya S.", location: "Bangalore", text: "Finally an oil that tastes like what my grandmother used to make. The groundnut oil aroma fills the kitchen.", rating: 5 },
  { id: 2, name: "Rajesh K.", location: "Chennai", text: "I was skeptical about the price, but the quality is unmatched. Very light and non-greasy.", rating: 5 },
  { id: 3, name: "Sneha M.", location: "Hyderabad", text: "Perfect for my toddler's food. I trust the zero-chemical promise completely.", rating: 5 },
];

const FAQS = [
  { q: "Is your oil truly cold-pressed?", a: "Yes, we use traditional wood-press methods (Chekka Ganuga) that keep the temperature below 45°C. This preserves all the natural nutrients and aroma." },
  { q: "What is the difference between refined and cold-pressed?", a: "Refined oils are treated with chemicals and high heat, promoting shelf life but destroying nutrients. Our cold-pressed oils are raw, unrefined, and chemical-free." },
  { q: "What is the shelf life?", a: "Since we use no preservatives, our oils are best used within 6-9 months. Store in a cool, dry place away from direct sunlight." },
  { q: "Is it suitable for daily indian cooking?", a: "Absolutely. Our Groundnut and Coconut oils have high smoke points suitable for deep frying and tadkas. Sesame oil is great for flavoring." },
];

const USAGE_IDEAS = [
  { title: "Everyday Cooking", desc: "Healthy replacement for refined oils in dals and curries.", icon: ChefHat },
  { title: "Tempering (Tadka)", desc: "Enhances the flavor of sambar and chutneys.", icon: Utensils },
  { title: "Deep Frying", desc: "Groundnut oil maintains stability at high heat.", icon: Droplets }
];

const PROCESS_STEPS = [
  { title: "Carefully Sourced", desc: "Premium seeds from organic certified farmers.", image: "https://images.unsplash.com/photo-1599321955726-900d5fff5dc1?q=80&w=600&auto=format&fit=crop" },
  { title: "Wood Pressed", desc: "Crushed at slow speeds to avoid heat buildup.", image: "https://images.unsplash.com/photo-1615486511484-92e172cc416d?q=80&w=600&auto=format&fit=crop" },
  { title: "Natural Filtration", desc: "Allowed to settle naturally. No chemical filtering.", image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=600&auto=format&fit=crop" },
  { title: "Freshly Packed", desc: "Bottled in hygiene-controlled batches.", image: "https://images.unsplash.com/photo-1605714312496-01e90cb509cc?q=80&w=600&auto=format&fit=crop" }
];

// --- COMPONENTS ---

const Navbar = ({ cartCount, onOpenCart }) => (
  <nav className="fixed top-0 w-full z-50 glass-panel">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center">
          <img src="/ENGLOGO.svg" alt="Veeyal" className="h-8 w-auto" />
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#products" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Products</a>
          <a href="#process" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Our Process</a>
          <a href="#usage" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Usage</a>
          <Button variant="ghost" size="icon" className="relative" onClick={onOpenCart}>
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={onOpenCart}>
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 h-2 w-2 bg-black rounded-full" />
            )}
          </Button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-xs font-medium tracking-wide text-secondary-foreground mb-6">
            MADE THE TRADITIONAL WAY • NO HEAT • NO CHEMICALS
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-8 text-balance">
            Your grandparents didn’t cook <br className="hidden md:block" /> with refined oil.
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
            Veeyal makes traditionally wood-pressed oils without heat or chemicals — so your everyday cooking doesn’t strip away nutrition.
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 h-12 text-base" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
                Switch to Traditional Oil
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-gray-200" onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}>
                See How It’s Made
              </Button>
            </div>
            <p className="text-sm text-muted-foreground font-medium opacity-80">
              Wood-pressed • Unrefined • Trusted by Indian families
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-16 md:mt-24 relative"
      >
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1589988290656-74b85c189b88?q=80&w=2000&auto=format&fit=crop"
            alt="Oil being poured"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </motion.div>
    </div>
  </section>
);

const TrustStrip = () => (
  <section className="border-y border-gray-100 bg-white py-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {[
          { text: "Traditionally cold-pressed", icon: Leaf },
          { text: "No heat processing", icon: Thermometer },
          { text: "No chemicals or additives", icon: Ban },
          { text: "Made for everyday cooking", icon: ChefHat }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 opacity-80">
            <item.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
            <span className="text-sm font-medium tracking-wide">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhySwitchSection = () => (
  <section className="py-24 bg-stone-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900">What changed in oil?</h2>
        <p className="text-xl text-gray-500 font-medium">Modern efficiency replaced traditional care.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "TRAIDITION",
            title: "Pressed slowly, without heat.",
            desc: "For centuries, oil was extracted naturally to preserve nutrients.",
            bg: "bg-white"
          },
          {
            label: "MODERNITY",
            title: "Extracted with high heat.",
            desc: "Factories prioritize speed and shelf-life over your health.",
            bg: "bg-white"
          },
          {
            label: "THE COST",
            title: "Clean look. Empty value.",
            desc: "Refined oils last longer but lose their natural aroma and soul.",
            bg: "bg-stone-200/50"
          }
        ].map((item, i) => (
          <div key={i} className={`flex flex-col p-10 rounded-[2rem] ${item.bg} hover:scale-[1.02] transition-transform duration-500 ease-out shadow-sm`}>
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6">{item.label}</span>
            <h3 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">{item.title}</h3>
            <p className="text-lg text-gray-500 leading-relaxed font-medium mt-auto">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const ProcessSection = () => (
  <section id="process" className="py-24 bg-stone-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">From Farm to Bottle</h2>
        <p className="text-xl font-medium text-primary mb-2">Never heated. Never refined. Never deodorized.</p>
        <p className="text-muted-foreground">Transparent process, uncompromising quality.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {PROCESS_STEPS.map((step, i) => (
          <div key={i} className="relative group">
            <div className="aspect-square overflow-hidden rounded-2xl mb-6 shadow-sm">
              <img src={step.image} alt={step.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-black text-white text-xs font-bold">{i + 1}</span>
              <h3 className="text-lg font-medium">{step.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground pl-9">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProductCard = ({ product, onAddToCart }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group relative"
  >
    {product.badge && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
        {product.badge}
      </span>
    )}
    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary mb-6">
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-white/50">
        {product.bestFor}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center pb-8">
        <Button className="rounded-full bg-white text-black hover:bg-gray-100" onClick={() => onAddToCart(product)}>
          Add to Bag - ₹{product.price}
        </Button>
      </div>
    </div>
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-medium text-primary">{product.name}</h3>
        {product.nudge && (
          <p className="text-sm font-semibold text-green-700 mb-1">{product.nudge}</p>
        )}
        <p className="text-sm text-muted-foreground mb-3">{product.tagline}</p>
        <div className="inline-block bg-secondary/50 px-3 py-1 rounded-lg text-xs font-semibold text-secondary-foreground">
          {product.bestFor}
        </div>
      </div>
      <div className="flex items-center justify-between pt-2">
        <div>
          <span className="text-lg font-semibold block">₹{product.price}</span>
          {product.micro && <span className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">{product.micro}</span>}
        </div>
        <Button variant="link" className="p-0 h-auto font-medium text-black">View Details <ArrowRight className="ml-1 h-3 w-3" /></Button>
      </div>
    </div>
  </motion.div>
);

const ProductShowcase = ({ onAddToCart }) => (
  <section id="products" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Pure Oils</h2>
        <p className="text-muted-foreground">Authentic taste for every Indian kitchen.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  </section>
);

const UsageInspiration = () => (
  <section id="usage" className="py-24 bg-stone-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Cooking with Tradition</h2>
        <p className="text-muted-foreground">Versatility in every drop.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {USAGE_IDEAS.map((idea, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center mb-6">
                <idea.icon className="h-6 w-6 text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-2">{idea.title}</h3>
              <p className="text-sm text-muted-foreground">{idea.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const SafetyAssurance = () => (
  <section className="py-16 bg-white border-b border-gray-100">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="inline-flex items-center justify-center p-3 bg-secondary/30 rounded-full mb-6">
        <ShieldCheck className="h-6 w-6 text-green-700" />
      </div>
      <h2 className="text-2xl font-semibold mb-4">Safety You Can Trust</h2>
      <p className="text-muted-foreground mb-8">
        Our traditional methods are backed by modern hygiene standards.
        Every batch is lab-tested for purity, ensuring no preservatives or artificial additives ever reach your kitchen.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <span className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-green-600" /> No Preservatives</span>
        <span className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-green-600" /> No Artificial Additives</span>
        <span className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-green-600" /> Lab Tested</span>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="reviews" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-medium text-center mb-16">Loved by Indian Families</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map(review => (
          <Card key={review.id} className="border-gray-100 shadow-sm rounded-2xl">
            <CardContent className="pt-8 px-8 pb-8">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6 text-gray-700">"{review.text}"</p>
              <div>
                <p className="text-sm font-medium">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="py-24 bg-stone-50">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-12 text-center">Common Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {FAQS.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b-gray-200">
            <AccordionTrigger className="text-lg font-medium hover:no-underline py-6">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 bg-black text-white text-center">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to stop cooking with refined oil?</h2>
      <p className="text-gray-400 mb-10 max-w-xl mx-auto">Switch to oils that nourish your food — not strip it.</p>
      <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-100 px-10 h-14 text-lg" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
        Switch from Refined Oil
      </Button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <img src="/ENGLOGO.svg" alt="Veeyal" className="h-8 w-auto mb-6" />
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Bringing the purity of traditional extraction back to your modern kitchen. Certified organic, ethically sourced from Indian farmers.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-6">Shop</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><a href="#" className="hover:text-black transition-colors">Groundnut Oil</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Sesame Oil</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Coconut Oil</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-6">Company</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 Veeyal. All rights reserved.</p>
        <p>Designed for healthy living.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
    toast.success(`Added ${product.name} to bag`);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(p => {
      if (p.id === id) {
        const newQty = Math.max(1, p.quantity + delta);
        return { ...p, quantity: newQty };
      }
      return p;
    }));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsCheckingOut(true);
    // Simulate API call
    setTimeout(() => {
      setIsCheckingOut(false);
      setCart([]);
      setCartOpen(false);
      toast.success("Order placed successfully! We'll contact you shortly.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-black selection:text-white">
      <Navbar cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)} onOpenCart={() => setCartOpen(true)} />

      <main>
        <Hero />
        <WhySwitchSection />

        <ProcessSection />
        <Testimonials />
        <ProductShowcase onAddToCart={addToCart} />
        <UsageInspiration />
        <SafetyAssurance />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />

      {/* Cart Drawer */}
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-2xl font-medium">Your Bag</SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto pr-2">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                <ShoppingBag className="h-12 w-12 mb-4 opacity-20" />
                <p>Your bag is empty</p>
                <Button variant="link" onClick={() => setCartOpen(false)}>Continue Shopping</Button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-secondary">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium">
                        <h3>{item.name}</h3>
                        <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{item.tagline}</p>
                      <div className="flex items-center justify-between text-sm mt-auto">
                        <div className="flex items-center border rounded-lg">
                          <button className="px-3 py-1 hover:bg-gray-100" onClick={() => updateQuantity(item.id, -1)}>-</button>
                          <span className="px-2">{item.quantity}</span>
                          <button className="px-3 py-1 hover:bg-gray-100" onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                        <button
                          type="button"
                          className="font-medium text-destructive hover:text-destructive/80"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t pt-6 mt-6">
              <div className="flex justify-between text-base font-medium mb-6">
                <p>Subtotal</p>
                <p>₹{cartTotal.toFixed(2)}</p>
              </div>

              <form onSubmit={handleCheckout} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required placeholder="Priya Sharma" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" required placeholder="98765 43210" className="rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Shipping Address</Label>
                  <Input id="address" required placeholder="Flat 101, Green Apts..." className="rounded-xl" />
                </div>

                <Button type="submit" className="w-full rounded-xl h-12 text-base" disabled={isCheckingOut}>
                  {isCheckingOut ? (
                    <span className="flex items-center gap-2">Processing...</span>
                  ) : (
                    "Place Order (Cash on Delivery)"
                  )}
                </Button>
              </form>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <Toaster position="top-center" />
    </div>
  );
}
