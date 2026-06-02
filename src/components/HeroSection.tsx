import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { useEffect } from "react";
import heroPlate from "@/assets/your-side-biryani.png"; // ✅ your PNG
import { BookingDialog } from "./BookingDialog";

// ✅ FIXED Counter Hook (no errors)
const useCounter = (to: number) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [to]);

  return rounded;
};

const HeroSection = () => {
  const reviews = useCounter(1200);

  return (
    <section className="relative min-h-[90dvh] flex flex-col items-center justify-start pt-32 md:pt-48 pb-16 md:pb-24 overflow-hidden px-4">

      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full border border-primary/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full border border-secondary/10"
        />
      </div>

      {/* CENTER BADGE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 md:mb-8 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 scale-90 md:scale-100"
      >
        <span className="text-xs md:text-sm font-medium text-primary">
          Since 2016 • Dilsukhnagar, Hyderabad
        </span>
      </motion.div>

      {/* MAIN TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 40, rotateX: 30 }}
        animate={{ opacity: 1, y: 0, rotateX: 10 }}
        transition={{ duration: 0.8 }}
        className="text-[34px] sm:text-[42px] md:text-[72px] lg:text-[96px] font-black font-display text-amber-700 text-center whitespace-nowrap leading-none"
        style={{
          transform: "rotateX(15deg)",
          textShadow: "0 10px 30px rgba(0,0,0,0.15), 0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        శ్రీ అభిరుచి బిర్యానీ
      </motion.h1>

      {/* HERO IMAGE & CARDS */}
      <div className="relative mt-8 md:mt-10 w-full flex flex-col items-center justify-center">
        
        {/* IMAGE */}
        <motion.img
          src={heroPlate}
          alt="Biryani"
          className="relative z-0 w-[320px] sm:w-[400px] md:w-[600px] lg:w-[780px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          animate={{ y: [0, -10, 0], rotate: [0, 1, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* CARDS CONTAINER - Side by Side on Mobile */}
        <div className="md:absolute md:inset-0 w-full flex flex-row items-center justify-center md:justify-between mt-8 md:mt-0 gap-4 md:gap-0 px-2 md:px-10 lg:px-20 pointer-events-none z-10 overflow-visible">
          
          {/* LEFT CARD (Reviews) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.8 },
              x: { duration: 0.8, delay: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="w-[150px] sm:w-[180px] md:w-[260px] h-[70px] md:h-[100px] bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-2 md:p-4 border flex items-center justify-start pointer-events-auto cursor-pointer"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden xs:flex -space-x-1.5 md:-space-x-2">
                {["🧑‍🍳", "👨‍🍳"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center border border-white text-[10px] md:text-lg shadow-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>

              <div className="text-left">
                <motion.span className="text-xs md:text-base font-bold text-foreground block leading-tight">
                  {reviews.get()}+
                </motion.span>
                <span className="text-[10px] md:text-xs text-muted-foreground font-medium leading-tight block">
                  Reviews
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD (Ratings) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 1 },
              x: { duration: 0.8, delay: 1 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="w-[150px] sm:w-[180px] md:w-[260px] h-[70px] md:h-[100px] bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-2 md:p-4 border flex items-center justify-start pointer-events-auto cursor-pointer"
          >
            <div className="flex flex-col gap-0.5 md:gap-1 w-full text-left">
              <div className="flex items-center gap-1 md:gap-2">
                <Star className="w-3 md:w-4 h-3 md:h-4 fill-secondary text-secondary" />
                <span className="text-[12px] md:text-sm font-bold text-foreground mt-0.5">
                  4.3★
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground font-medium">
                <MapPin className="w-3 md:w-3.5 h-3 md:h-3.5 text-primary shrink-0" />
                <span className="truncate">18K+ ratings</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* TAGLINE */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 md:mt-20 text-center max-w-xl text-[13px] md:text-lg text-muted-foreground px-4 md:px-0"
      >
        A stunning combination of Hyderabadi Biryani with Andhra spice & Indo-Chinese flair.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-row gap-4 md:gap-6 mt-8 md:mt-12 mb-10"
      >
        <motion.a
          href="#menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 md:px-12 py-3.5 md:py-4 rounded-full bg-hero-gradient text-white text-sm md:text-base font-bold flex items-center gap-2 shadow-lg"
        >
          Explore Menu
          <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
        </motion.a>

        <BookingDialog
          trigger={
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 md:px-12 py-3.5 md:py-4 rounded-full border-2 border-primary text-primary text-sm md:text-base font-bold shadow-md"
            >
              Book a Table
            </motion.button>
          }
        />
      </motion.div>

      {/* MARQUEE */}
      <div className="absolute bottom-0 left-0 right-0 bg-foreground py-2 md:py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-10 text-background font-bold text-sm md:text-lg">
          <span>🍗 CHICKEN BIRYANI ★ ANDHRA PULAV ★ CHICKEN 65 ★</span>
          <span>🍗 CHICKEN BIRYANI ★ ANDHRA PULAV ★ CHICKEN 65 ★</span>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;