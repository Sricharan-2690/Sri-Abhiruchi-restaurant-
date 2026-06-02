import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowUp } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-black">
              <span className="text-primary">Sri Abhiruchi</span>
            </h3>
            <p className="text-sm font-body text-background/50 leading-relaxed">
              Biryani & Chinese Fast Food since 2016. Serving Dilsukhnagar with love, flavour & healthy cooking.
            </p>
            <div className="flex items-center gap-3 text-sm text-background/40 font-body">
              <span>Available on:</span>
              <span className="px-2 py-1 rounded-md bg-background/10 text-background/70 text-xs font-bold">Swiggy</span>
              <span className="px-2 py-1 rounded-md bg-background/10 text-background/70 text-xs font-bold">Zomato</span>
            </div>
          </div>

          {/* Quick Info */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Quick Info</h4>
            <div className="space-y-3 text-sm font-body text-background/60">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>11:00 AM – 11:00 PM, all days</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>096660 75292 / 89782 99229</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>Sai Tower, Moosarambagh, Dilsukhnagar, Hyderabad 500060</span>
              </div>
            </div>
          </div>

          {/* Price band */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Visit Us</h4>
            <p className="text-sm font-body text-background/60">
              Budget: ₹200–400 per person<br />
              Family-friendly dine-in + fast-food<br />
              Near Dilsukhnagar Metro, Pillar 1519
            </p>
            <p className="text-xs font-body text-background/30">
              Must-try: Fry Piece Biryani • Andhra Pulav • Chicken 65
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/30 font-body">
            © 2024 Sri Abhiruchi Biryani & Chinese Fast Food. All rights reserved.
          </p>
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
