import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
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
    FlaskConical,
    ShoppingBag,
    MessageCircle,
    CreditCard,
    Truck
} from 'lucide-react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Helmet } from 'react-helmet-async';

// --- MOCK DATA ---
const PRODUCTS = [
    {
        id: 1,
        name: "Wood-Pressed Groundnut Oil",
        tagline: "Perfect for deep frying & daily curry",
        price: 399,
        image: "/groundnut.png",
        description: "Extracted from premium organic peanuts using traditional wood-pressing (Chekka Ganuga). High smoke point for Indian cooking.",
        benefits: ["High smoke point", "Nutty aroma", "Zero cholesterol"],
        bestFor: "Best for Daily Cooking",
        badge: "⭐ MOST FAMILIES START HERE",
        nudge: "Best first switch from refined oil",
        micro: "Ideal for daily South Indian cooking",
        stock: 47
    },
    {
        id: 2,
        name: "Pure Sesame Oil",
        tagline: "For tempering & idli podi",
        price: 349,
        image: "/sesame.png",
        description: "Traditional Gingelly oil. Perfect for dosas, pickles, and oil pulling. Rich in antioxidants.",
        benefits: ["Rich flavor", "Natural antioxidants", "Traditional taste"],
        bestFor: "Best for Tempering"
    },
    {
        id: 3,
        name: "Virgin Coconut Oil",
        tagline: "Kerala coconut goodness",
        price: 299,
        image: "/cocnut.png",
        description: "Extracted from fresh coconut milk. Ideal for Kerala cuisine, raw consumption, and hair care.",
        benefits: ["Fresh aroma", "Cold processed", "Multipurpose"],
        bestFor: "Best for Raw Use & Hair"
    }
];

const REVIEWS = [
    { id: 1, name: "Priya S.", location: "Bangalore", text: "We used refined sunflower oil for years but were worried about chemicals. I was skeptical if cold-pressed would smell too strong, but it’s perfect. Food tastes lighter and we feel healthier.", rating: 5, headline: "We feel healthier." },
    { id: 2, name: "Rajesh K.", location: "Chennai", text: "My doctor suggested quitting refined oil. I thought traditional oils would be too heavy or expensive. Veeyal is worth every rupee—blends perfectly with our curries.", rating: 5, headline: "Worth every rupee." },
    { id: 3, name: "Sneha M.", location: "Hyderabad", text: "I wanted to stop using packet oils but didn't know where to start. I was afraid of the strong aroma. This oil is so fresh and light, I’ll never go back.", rating: 5, headline: "I’ll never go back." },
];

const FAQS = [
    {
        q: "Is this really cold-pressed?",
        a: "Yes. We use traditional wooden chekkus (ghani) that press seeds slowly without heat. This preserves the natural nutrients and authentic aroma that refined oils strip away."
    },
    {
        q: "Why does it cost more than refined oil?",
        a: "Refined oils are cheap because they are mass-produced using chemicals and low-quality seeds. We use 3kg of premium raw seeds to make just 1 litre of pure oil. You are paying for 100% natural oil, not fillers."
    },
    {
        q: "Is it safe for daily cooking?",
        a: "Absolutely. Veeyal oils are natural, stable at high heat, and chemical-free. They are perfect for everything from deep frying to tempering (tadka) and daily curries."
    }
];

const PROCESS_STEPS = [
    { title: "Better raw ingredients", desc: "Sourced from trusted farmers to ensure clean, high-quality seeds.", image: "/step1.jpeg" },
    { title: "Easier digestion", desc: "Slow cold-pressing preserves nutrients and natural taste.", image: "/step2.jpeg" },
    { title: "Nothing harmful added", desc: "Naturally settled and filtered without chemicals.", image: "/step3.jpeg" },
    { title: "Fresh for daily use", desc: "Packed in small batches to maintain purity.", image: "/step4.jpeg" }
];

const Hero = () => (
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
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
                        Pure cold-pressed oils for families who care about health
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
                        Traditionally made oils with no refining, no chemicals, and no shortcuts — safe for everyday cooking.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-4 sm:px-0">
                            <Button size="lg" className="rounded-full px-8 h-12 text-base bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg hover:shadow-emerald-900/20 w-full sm:w-auto" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
                                Order on WhatsApp →
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
                        src="/hero.png"
                        alt="Oil being poured"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            </motion.div>
        </div>
    </section>
);

const TransitionSection = () => (
    <section className="py-24 md:py-32 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Why refined oils don’t belong in your kitchen
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
                Most refined oils are made using high heat and chemicals. <br className="hidden md:block" />
                This removes natural nutrients and focuses on shelf life, not health.
            </p>
            <div className="flex justify-center mb-16">
                <div className="h-16 w-px bg-gray-200"></div>
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-lg font-semibold text-emerald-800 tracking-wide max-w-3xl mx-auto"
            >
                Veeyal oils are cold-pressed using traditional methods. No chemical extraction. No extreme heat. Just pure oil, the way it was meant to be.
            </motion.p>
        </div>
    </section>
);

const ProcessSection = () => (
    <section id="process" className="py-16 md:py-32 bg-white overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-32">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-xs font-bold tracking-widest uppercase mb-6 text-emerald-800">How it works</span>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900">From farm to bottle.</h2>
                <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">A transparent journey of purity, ensuring nothing is added and nothing is removed.</p>
            </div>

            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
                <div className="space-y-24 md:space-y-32">
                    {PROCESS_STEPS.map((step, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                        >
                            <div className="flex-1 text-center md:text-left z-10 bg-white md:p-8 rounded-3xl">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xl mb-6">
                                    {index + 1}
                                </div>
                                <h3 className="text-3xl font-semibold mb-4 text-gray-900 tracking-tight">{step.title}</h3>
                                <p className="text-lg text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                            </div>

                            <div className="flex-1 w-full z-10">
                                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const ProductCard = ({ product, onAddToCart, index = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="group relative flex flex-col items-center bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500"
    >
        {product.badge && (
            <span className="absolute top-6 right-6 z-20 bg-emerald-100 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                {product.badge.replace("⭐ ", "")}
            </span>
        )}
        {product.stock && (
            <div className="absolute top-6 left-6 z-20 flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide border border-red-100">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                Only {product.stock} left
            </div>
        )}

        <div className="w-full aspect-[4/5] relative rounded-3xl overflow-hidden mb-8">
            <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-6 bottom-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Button className="w-full rounded-full bg-emerald-700 backdrop-blur-md text-white hover:bg-emerald-800 h-12 shadow-lg hover:shadow-emerald-900/20 font-medium" onClick={() => onAddToCart(product)}>
                    Add to Bag - ₹{product.price}
                </Button>
            </div>
        </div>

        <div className="text-center w-full space-y-2">
            <div className="inline-block px-3 py-1 rounded-lg bg-stone-100 text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">
                {product.bestFor}
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">{product.name}</h3>
            <p className="text-gray-500 font-medium text-sm">{product.tagline}</p>

            <div className="pt-4 flex items-center justify-center gap-2 text-black font-semibold">
                <span className="text-lg">₹{product.price}</span>
                <Button variant="ghost" size="sm" className="rounded-full hover:bg-stone-100 px-3 text-xs font-medium h-8">
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
            </div>
        </div>
    </motion.div>
);

const ProductShowcase = ({ onAddToCart }) => (
    <section id="products" className="py-16 md:py-32 bg-[#F5F5F7] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-20">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900">Our Collection.</h2>
                <p className="text-xl text-gray-500 font-medium">Pure. Potent. Pressed for you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PRODUCTS.map((product, idx) => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} index={idx} />
                ))}
            </div>
        </div>
    </section>
);

const OrderingSteps = () => (
    <section id="how-to-order" className="py-16 md:py-32 bg-[#F5F5F7] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900">How it works</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    {
                        title: "1. Choose your oil",
                        icon: ShoppingBag,
                        color: "text-orange-600",
                        bg: "bg-orange-50"
                    },
                    {
                        title: "2. Order on WhatsApp",
                        icon: MessageCircle,
                        color: "text-emerald-600",
                        bg: "bg-emerald-50"
                    },
                    {
                        title: "3. Confirm & pay",
                        icon: CreditCard,
                        color: "text-blue-600",
                        bg: "bg-blue-50"
                    },
                    {
                        title: "4. Delivered to your home",
                        icon: Truck,
                        color: "text-purple-600",
                        bg: "bg-purple-50"
                    }
                ].map((item, i) => (
                    <div key={i} className="group flex flex-col items-center text-center p-8 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                        <div className={`h-16 w-16 mb-6 rounded-2xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                            <item.icon className={`h-8 w-8 ${item.color}`} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TrustStrip = () => (
    <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-stone-50 rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
                        {[
                            "No chemical refining",
                            "Cold-pressed in small batches",
                            "Trusted by families in Tamil Nadu"
                        ].map((text, i) => (
                            <span key={i} className="flex items-center justify-center gap-3 text-base font-semibold text-gray-900">
                                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <Check className="h-3.5 w-3.5 text-emerald-700" strokeWidth={3} />
                                </div>
                                {text}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const SafetySection = () => (
    <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-stone-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto">
                    <div className="inline-flex items-center justify-center p-5 bg-white rounded-full mb-10 shadow-sm">
                        <ShieldCheck className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-gray-900">Safety you can trust.</h2>
                    <p className="text-xl text-gray-500 font-medium mb-12 leading-relaxed">
                        We use no heat or chemicals. Naturally filtered for purity. Safe for your daily cooking.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
                        {[
                            "No Preservatives",
                            "No Artificial Additives",
                            "Lab Tested"
                        ].map((text, i) => (
                            <span key={i} className="flex items-center justify-center gap-3 text-base font-semibold text-gray-900">
                                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <Check className="h-3.5 w-3.5 text-emerald-700" strokeWidth={3} />
                                </div>
                                {text}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Testimonials = () => (
    <section id="reviews" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-gray-900">Families who switched never went back.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {REVIEWS.map(review => (
                    <Card key={review.id} className="border-none shadow-lg bg-stone-50/50 rounded-2xl hover:scale-[1.02] transition-transform duration-500">
                        <CardContent className="pt-8 px-8 pb-8">
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{review.headline}</h3>
                            <p className="text-base leading-relaxed mb-6 text-gray-600">"{review.text}"</p>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                                <p className="text-xs text-gray-500">{review.location}</p>
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
            <p className="text-gray-300 mb-10 max-w-xl mx-auto text-xl md:text-2xl font-medium">Switch to oils that nourish your food — <br className="hidden md:block" /> not strip it.</p>
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-100 px-10 h-14 text-lg" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
                Switch from Refined Oil
            </Button>
        </div>
    </section>
);

const HomePage = ({ onAddToCart }) => {
    return (
        <>
            <Helmet>
                <title>Veeyal | Traditional Wood-Pressed Oils - Organic & Pure</title>
                <meta name="description" content="Buy premium wood-pressed (cold-pressed) oils. Organic Groundnut, Sesame, and Coconut oil extracted traditionally without heat or chemicals." />
                <meta name="keywords" content="organic cold pressed oil, wood pressed oil, groundnut oil, traditional cooking oil India, veeyal" />
                <link rel="canonical" href="https://veeyal.com/" />
            </Helmet>

            <Hero />
            <TrustStrip />
            <TransitionSection />
            <ProcessSection />
            <SafetySection />
            <Testimonials />
            <ProductShowcase onAddToCart={onAddToCart} />
            <OrderingSteps />
            <FAQSection />
            <FinalCTA />
        </>
    );
};

export default HomePage;
