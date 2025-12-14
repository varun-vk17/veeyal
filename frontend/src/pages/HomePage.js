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
    FlaskConical
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
    { id: 1, name: "Priya S.", location: "Bangalore", text: "We switched our entire cooking to this oil. The difference in taste and digestion is immediate.", rating: 5, headline: "We switched our entire cooking." },
    { id: 2, name: "Rajesh K.", location: "Chennai", text: "Finally an oil my parents trust. It reminds them of the fresh oil from the village mill.", rating: 5, headline: "Finally an oil my parents trust." },
    { id: 3, name: "Sneha M.", location: "Hyderabad", text: "Doesn’t smell, doesn’t foam, doesn’t feel heavy. It’s exactly what pure oil should be.", rating: 5, headline: "Doesn’t smell, doesn’t feel heavy." },
];

const FAQS = [
    { q: "Is your oil truly cold-pressed?", a: "Yes, we use traditional wood-press methods (Chekka Ganuga) that keep the temperature below 45°C. This preserves all the natural nutrients and aroma." },
    { q: "What is the difference between refined and cold-pressed?", a: "Refined oils are treated with chemicals and high heat, promoting shelf life but destroying nutrients. Our cold-pressed oils are raw, unrefined, and chemical-free." },
    { q: "What is the shelf life?", a: "Since we use no preservatives, our oils are best used within 6-9 months. Store in a cool, dry place away from direct sunlight." },
    { q: "Is it suitable for daily indian cooking?", a: "Absolutely. Our Groundnut and Coconut oils have high smoke points suitable for deep frying and tadkas. Sesame oil is great for flavoring." },
];

const PROCESS_STEPS = [
    { title: "Carefully Sourced", desc: "Premium seeds from organic certified farmers.", image: "/step1.jpeg" },
    { title: "Wood Pressed", desc: "Crushed at slow speeds to avoid heat buildup.", image: "/step2.jpeg" },
    { title: "Natural Filtration", desc: "Allowed to settle naturally. No chemical filtering.", image: "/step3.jpeg" },
    { title: "Freshly Packed", desc: "Bottled in hygiene-controlled batches.", image: "/step4.jpeg" }
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
                        Your grandparents didn’t cook <br className="hidden md:block" /> with refined oil.
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
                        Veeyal makes traditionally wood-pressed oils without heat or chemicals — so your everyday cooking doesn’t strip away nutrition.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-4 sm:px-0">
                            <Button size="lg" className="rounded-full px-8 h-12 text-base bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg hover:shadow-emerald-900/20 w-full sm:w-auto" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
                                Switch to Traditional Oil
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-gray-200 w-full sm:w-auto" onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}>
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
            <span className="text-xs font-bold tracking-[0.2em] text-emerald-800 uppercase mb-6 block">
                What Changed
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Oil didn’t change. <br className="hidden md:block" />
                The way we make it did.
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
                For generations, oil was pressed slowly for food. <br className="hidden md:block" />
                Today, it’s processed fast for factories.
            </p>
            <div className="flex justify-center mb-16">
                <div className="h-16 w-px bg-gray-200"></div>
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-lg font-semibold text-emerald-800 tracking-wide"
            >
                So we went back to the original way.
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

const UsageInspiration = () => (
    <section id="usage" className="py-16 md:py-32 bg-[#F5F5F7] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900">Expert performance. <br className="hidden md:block" /> In every dish.</h2>
                <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">From high-heat frying to delicate tempering, traditional oils do it better.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Everyday Cooking",
                        desc: "The perfect healthy base for your daily dals, subzis, and curries.",
                        icon: ChefHat,
                        color: "text-orange-600",
                        bg: "bg-orange-50"
                    },
                    {
                        title: "Traditional Tadka",
                        desc: "Unlock the authentic aroma of sambar and chutneys with a single splash.",
                        icon: Utensils,
                        color: "text-yellow-600",
                        bg: "bg-yellow-50"
                    },
                    {
                        title: "Deep Frying",
                        desc: "Naturally high smoke point ensures stable frying without breaking down.",
                        icon: Droplets,
                        color: "text-blue-600",
                        bg: "bg-blue-50"
                    }
                ].map((item, i) => (
                    <div key={i} className="group flex flex-col items-start p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                        <div className={`h-16 w-16 mb-10 rounded-2xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                            <item.icon className={`h-8 w-8 ${item.color}`} strokeWidth={1.5} />
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                        <p className="text-lg text-gray-500 leading-relaxed font-medium">{item.desc}</p>

                        <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Best For</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const SafetyAssurance = () => (
    <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-stone-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto">
                    <div className="inline-flex items-center justify-center p-5 bg-white rounded-full mb-10 shadow-sm">
                        <ShieldCheck className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-gray-900">Safety you can trust.</h2>
                    <p className="text-xl text-gray-500 font-medium mb-12 leading-relaxed">
                        Our traditional methods are backed by modern hygiene standards.
                        Every batch is lab-tested for purity, ensuring absolutely no preservatives or artificial additives.
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
            <TransitionSection />
            <ProcessSection />
            <Testimonials />
            <ProductShowcase onAddToCart={onAddToCart} />
            <UsageInspiration />
            <SafetyAssurance />
            <FAQSection />
            <FinalCTA />
        </>
    );
};

export default HomePage;
