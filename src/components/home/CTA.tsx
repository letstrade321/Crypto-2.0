
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Flip the Game?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start betting on anything or earn passive income by providing liquidity. The choice is yours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/markets">
              <Button className="btn-gradient shadow-neon-glow text-lg py-6 px-8 w-full sm:w-auto">
                Start Betting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/liquidity">
              <Button variant="outline" className="bg-background/50 border-white/20 hover:bg-background/80 text-lg py-6 px-8 w-full sm:w-auto">
                Be the House
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
