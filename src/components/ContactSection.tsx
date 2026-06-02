import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body font-semibold mb-4">
            VISIT US
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-4">
            Find <span className="font-serif italic text-gradient">Us Here</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: "Address",
                content: "Sai Tower, C.S‑1, Plot No: 27/A, Moosarambagh, Dilsukhnagar, Hyderabad, Telangana 500060",
                sub: "Near Metro Pillar No‑1519, beside Tipsy Topsy Bakers",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "096660 75292",
                sub: "Also: 89782 99229",
                link: "tel:09666075292",
              },
              {
                icon: Clock,
                title: "Timings",
                content: "11:00 AM – 11:00 PM",
                sub: "Open all days (Mon–Sun)",
              },
              {
                icon: Navigation,
                title: "Landmarks",
                content: "Dilsukhnagar Metro Station",
                sub: "Metro Pillar No‑1519 • Beside Tipsy Topsy Bakers",
              },
            ].map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
                onClick={() => info.link && window.open(info.link)}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">{info.title}</h4>
                  <p className="text-sm text-foreground/80 font-body">{info.content}</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">{info.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="tel:09666075292"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(16 85% 55% / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-hero-gradient text-primary-foreground font-body font-bold shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call to Order
              </motion.a>
              <motion.a
                href="https://maps.google.com/?q=Sri+Abhiruchi+Biryani+Dilsukhnagar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-foreground text-foreground font-body font-bold hover:bg-foreground hover:text-background transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </motion.a>
            </div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-border h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.5257!3d17.3687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99a1f9eb5555%3A0x1234567890abcdef!2sDilsukhnagar%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Abhiruchi Biryani Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
