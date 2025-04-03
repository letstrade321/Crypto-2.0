
import { 
  Users, 
  BarChart3, 
  Shield, 
  Building, 
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-crypto-blue" />,
      title: "P2P Betting on Anything",
      description: "Trade, bet, or predict any event with our flexible prediction markets. Create your own betting markets in seconds."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-crypto-purple" />,
      title: "Fixed & Dynamic Odds",
      description: "Choose between fixed odds for certainty or dynamic odds that adjust based on market sentiment and liquidity."
    },
    {
      icon: <Shield className="h-10 w-10 text-crypto-pink" />,
      title: "No Middlemen",
      description: "Fully decentralized on Solana with smart contracts that ensure fairness and transparency for all participants."
    },
    {
      icon: <Building className="h-10 w-10 text-crypto-blue" />,
      title: "Be the House",
      description: "Provide liquidity to betting pools and earn passive income from the house edge, with configurable risk levels."
    },
    {
      icon: <Zap className="h-10 w-10 text-crypto-purple" />,
      title: "Fast & Low-Cost",
      description: "Solana's high-performance blockchain ensures instant transactions and near-zero fees for a seamless experience."
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            CryptoFlip 2.0 combines cutting-edge technology with user-friendly design to create the ultimate betting platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="rounded-full bg-background/50 p-3 w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
