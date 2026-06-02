import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import fryPieceBiryani from "@/assets/fry-piece-biryani.jpg";
import chicken65 from "@/assets/chicken-65.jpg";
import friedRice from "@/assets/fried-rice.jpg";
import chickenLollipop from "@/assets/chicken-lollipop.jpg";
import andhraPulav from "@/assets/andhra-pulav.jpg";
import manchurian from "@/assets/manchurian.jpg";

const menuItems = [
  {
    name: "Fried Piece Special Biryani",
    price: "₹259",
    oldPrice: "₹299",
    image: fryPieceBiryani,
    tag: "Bestseller",
    desc: "Crispy fried chicken on aromatic rice with kaju gravy & raita",
  },
  {
    name: "Chicken 65",
    price: "₹219",
    image: chicken65,
    tag: "Starter",
    desc: "Spicy crispy fried chicken with curry leaves & chili",
  },
  {
    name: "Chicken Fried Rice",
    price: "₹200",
    image: friedRice,
    tag: "Chinese",
    desc: "Indo-Chinese style wok-tossed rice with egg & chicken",
  },
  {
    name: "Chicken Lollipop",
    price: "₹250",
    image: chickenLollipop,
    tag: "Starter",
    desc: "Crispy drumettes with green chutney dip",
  },
  {
    name: "Andhra Pulav",
    price: "₹199",
    image: andhraPulav,
    tag: "Spicy",
    desc: "Strong masala Andhra-style rice with curry sides",
  },
  {
    name: "Chicken Manchurian",
    price: "₹230",
    image: manchurian,
    tag: "Chinese",
    desc: "Crispy chicken balls in thick spicy gravy",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body font-semibold mb-4">
            OUR MENU
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-4">
            Our <span className="font-serif italic text-gradient">Best Delivered</span>
            <br />Categories
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            From sizzling biryanis to crispy Chinese — every dish crafted with love, sunflower oil & zero food colours.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-background rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-border"
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-body font-bold uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    {item.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through font-body">{item.oldPrice}</span>
                    )}
                    <span className="text-2xl font-display font-black text-primary">{item.price}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="tel:09666075292"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-foreground text-foreground font-body font-bold text-lg hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            View All Dishes
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
