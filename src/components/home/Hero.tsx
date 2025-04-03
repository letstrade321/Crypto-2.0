
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-hero-glow pt-32 pb-20">
      <div className="absolute inset-0 bg-crypto-grid bg-[length:30px_30px] opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Bet on Anything.</span>{" "}
            <span className="text-gradient">Be the House.</span>{" "}
            <span className="text-gradient">Earn Like the Pros.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            CryptoFlip 2.0 – The first decentralized, Solana-powered betting and trading platform with dynamic odds & passive income pools.
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
        
        <div className="mt-16 bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-neon-glow max-w-4xl mx-auto">
          <h3 className="text-lg font-medium mb-4 text-white text-center">Live Markets & Odds</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card border border-white/10 rounded-lg p-4 hover:border-crypto-blue/50 transition-all">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">BTC/USD Flip</span>
                <span className="text-xs px-2 py-0.5 bg-crypto-blue/20 text-crypto-blue rounded-full">Live</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Up</span>
                <span className="text-green-400">x1.95</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="font-medium">Down</span>
                <span className="text-red-400">x2.05</span>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-muted-foreground">Liquidity: $24.5K</span>
              </div>
            </div>
            
            <div className="bg-card border border-white/10 rounded-lg p-4 hover:border-crypto-purple/50 transition-all">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">ETH/BTC Flip</span>
                <span className="text-xs px-2 py-0.5 bg-crypto-purple/20 text-crypto-purple rounded-full">Trending</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Up</span>
                <span className="text-green-400">x2.10</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="font-medium">Down</span>
                <span className="text-red-400">x1.90</span>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-muted-foreground">Liquidity: $18.2K</span>
              </div>
            </div>
            
            <div className="bg-card border border-white/10 rounded-lg p-4 hover:border-crypto-pink/50 transition-all">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">SOL/USD Flip</span>
                <span className="text-xs px-2 py-0.5 bg-crypto-pink/20 text-crypto-pink rounded-full">Hot</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Up</span>
                <span className="text-green-400">x2.25</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="font-medium">Down</span>
                <span className="text-red-400">x1.75</span>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-muted-foreground">Liquidity: $9.7K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
