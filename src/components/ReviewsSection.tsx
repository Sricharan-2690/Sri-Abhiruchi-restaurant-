import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul K.",
    rating: 5,
    text: "Best fry piece biryani in Dilsukhnagar! Huge portions, amazing taste. The chicken is so crispy and flavorful.",
    platform: "Google",
  },
  {
    name: "Priya S.",
    rating: 4,
    text: "Love their Andhra Pulav — real spicy heat! Family loved the Chinese starters too. Great value for money.",
    platform: "Swiggy",
  },
  {
    name: "Mohammed A.",
    rating: 5,
    text: "Been coming here since 2018. Consistent taste, generous quantity. The chicken 65 is addictive!",
    platform: "Zomato",
  },
  {
    name: "Sneha R.",
    rating: 4,
    text: "Amazing biryani at such affordable prices. The fact that they use sunflower oil makes it even better. Healthy & tasty!",
    platform: "Google",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body font-semibold mb-4">
            REVIEWS
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-4">
            Our Client <span className="font-serif italic text-gradient">Feedback</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "var(--card-shadow-hover)" }}
              className="p-6 rounded-3xl bg-background border border-border shadow-card transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{review.platform}</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
