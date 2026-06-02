import { motion } from "framer-motion";
import { Flame, Leaf, Heart } from "lucide-react";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const features = [
  { icon: Leaf, title: "Sunflower Oil Only", desc: "No palm oil, no shortcuts — just healthy cooking" },
  { icon: Flame, title: "Andhra Spice Level", desc: "Authentic medium-high heat that keeps you coming back" },
  { icon: Heart, title: "No Food Colours", desc: "Natural ingredients, vibrant flavors, zero artificial colours" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full"
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={restaurantInterior}
                alt="Sri Abhiruchi Restaurant Interior"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-primary rounded-3xl p-6 shadow-xl text-primary-foreground"
            >
              <p className="text-4xl font-display font-black">8+</p>
              <p className="text-sm font-body">Years of<br />Taste</p>
            </motion.div>

            {/* Smiley circle */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-6 w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center bg-background text-3xl shadow-lg"
            >
              😋
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body font-semibold mb-4">
                ABOUT US
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-foreground leading-tight">
                Choose healthy. 🔥
                <br />
                Be strong. <span className="font-serif italic text-gradient">Live long</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Sri Abhiruchi Biryani & Chinese Fast Food is a family dine-in restaurant near Dilsukhnagar Metro, Hyderabad.
              We serve authentic Hyderabadi Biryani, spicy Andhra Pulav, and sizzling Indo-Chinese dishes — all cooked in sunflower oil with zero food colours.
            </p>

            <div className="space-y-4">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground">{feat.title}</h4>
                    <p className="text-sm text-muted-foreground font-body">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
