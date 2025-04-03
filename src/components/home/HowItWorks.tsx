
import { ArrowRight, TrendingUp, Landmark, Zap } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-crypto-grid bg-[length:30px_30px] opacity-5"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            CryptoFlip 2.0 makes P2P betting and liquidity provision simple, secure, and profitable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative group hover:border-crypto-blue/50 transition-all">
            <div className="absolute -top-6 left-8 bg-crypto-blue/20 p-3 rounded-lg shadow-neon-blue group-hover:shadow-neon-glow transition-all">
              <TrendingUp className="h-8 w-8 text-crypto-blue" />
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">1. Bet on Anything</h3>
              <p className="text-muted-foreground">
                Place bets on crypto price movements, sports outcomes, or create your own custom markets with our intuitive interface.
              </p>
              <div className="mt-4 flex items-center text-crypto-blue">
                <span className="text-sm font-medium">Start betting</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative group hover:border-crypto-purple/50 transition-all">
            <div className="absolute -top-6 left-8 bg-crypto-purple/20 p-3 rounded-lg shadow-neon-purple group-hover:shadow-neon-glow transition-all">
              <Landmark className="h-8 w-8 text-crypto-purple" />
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">2. Earn Passive Income</h3>
              <p className="text-muted-foreground">
                Provide liquidity to betting pools and earn passive income as the house. Choose your risk level and lock-in period.
              </p>
              <div className="mt-4 flex items-center text-crypto-purple">
                <span className="text-sm font-medium">Be the house</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative group hover:border-crypto-pink/50 transition-all">
            <div className="absolute -top-6 left-8 bg-crypto-pink/20 p-3 rounded-lg shadow-neon-glow group-hover:shadow-neon-glow transition-all">
              <Zap className="h-8 w-8 text-crypto-pink" />
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">3. Instant Payouts</h3>
              <p className="text-muted-foreground">
                Smart contracts ensure instant, trustless settlements with near-zero fees on Solana's high-speed blockchain.
              </p>
              <div className="mt-4 flex items-center text-crypto-pink">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
