import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Calendar } from "lucide-react";
import { BookingDialog } from "./BookingDialog";

const navLinks = ["Home", "Menu", "About", "Bestsellers", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          <h1 className="text-xl md:text-2xl font-display font-bold tracking-tight">
            <span className="text-gradient">Sri Abhiruchi</span>
          </h1>
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            Biryani & Chinese Fast Food
          </p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <BookingDialog
            trigger={
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary text-primary font-body text-sm font-semibold hover:bg-primary/5 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Book Table
              </motion.button>
            }
          />
          <motion.a
            href="tel:09666075292"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(link.toLowerCase())}
                  className="text-lg font-body font-medium text-foreground"
                >
                  {link}
                </motion.button>
              ))}
              <div className="flex flex-col gap-3 mt-4 w-full px-6">
                <BookingDialog
                  trigger={
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-primary text-primary font-body font-semibold"
                    >
                      <Calendar className="w-4 h-4" />
                      Book Table
                    </motion.button>
                  }
                />
                <motion.a
                  href="tel:09666075292"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  09666 075 292
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
