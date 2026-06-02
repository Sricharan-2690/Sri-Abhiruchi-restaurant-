import { motion } from "framer-motion";
import { Star, Flame } from "lucide-react";
import fryPieceBiryani from "@/assets/fry-piece-biryani.jpg";
import heroBiryani from "@/assets/hero-biryani.jpg";
import andhraPulav from "@/assets/andhra-pulav.jpg";
import chicken65 from "@/assets/chicken-65.jpg";

const bestsellers = [
  {
    name: "Chicken Fry Piece Biryani",
    image: fryPieceBiryani,
    rating: "4.5",
    reviews: "3.2K",
    desc: "Our #1 most-ordered dish. Crispy golden fried chicken on fragrant basmati with kaju gravy, gongura curry & raita.",
    price: "₹259",
    spice: 4,
  },
  {
    name: "Special Chicken Biryani",
    image: heroBiryani,
    rating: "4.3",
    reviews: "2.8K",
    desc: "Classic Hyderabadi dum biryani with tender chicken pieces, saffron rice & rich gravy on the side.",
    price: "₹229",
    spice: 3,
  },
  {
    name: "Andhra Pulav",
    image: andhraPulav,
    rating: "4.4",
    reviews: "1.5K",
    desc: "Strong masala Andhra-style spicy pulav with curry sides. For those who love real heat.",
    price: "₹199",
    spice: 5,
  },
  {
    name: "Chicken 65 Starter",
    image: chicken65,
    rating: "4.2",
    reviews: "2.1K",
    desc: "Crispy, fiery chicken bites with curry leaves, red chili & a hint of ginger. Perfect starter.",
    price: "₹219",
    spice: 4,
  },
];

const BestsellersSection = () => {
  return (
    <section id="bestsellers" className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--background)) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-body font-semibold mb-4">
            🔥 MOST LOVED
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
            Our <span className="font-serif italic text-secondary">Bestsellers</span>
          </h2>
          <p className="text-background/60 font-body max-w-lg mx-auto">
            The dishes that made us famous across Dilsukhnagar — and all of Hyderabad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {bestsellers.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-background/5 backdrop-blur-sm border border-background/10 hover:border-primary/40 transition-all duration-500"
            >
              <motion.div
                whileHover={{ rotate: 3 }}
                className="w-full sm:w-48 h-48 rounded-2xl overflow-hidden shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="text-sm font-body text-secondary font-bold">{item.rating}</span>
                    <span className="text-xs text-background/40 font-body">({item.reviews} reviews)</span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-background/50 font-body leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-display font-black text-primary">{item.price}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Flame key={j} className={`w-4 h-4 ${j < item.spice ? "text-primary fill-primary" : "text-background/20"}`} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
