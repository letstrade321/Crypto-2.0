
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CryptoFlip 2.0 has changed how I think about crypto betting. The liquidity pools deliver consistent passive income.",
      author: "Alex R.",
      role: "Liquidity Provider"
    },
    {
      quote: "The smoothest betting platform I've used. Instant settlements and the ability to create custom markets is a game-changer.",
      author: "Sarah T.",
      role: "Active Trader"
    },
    {
      quote: "I've been looking for ways to earn yield on my crypto, and being the house on CryptoFlip is consistently profitable.",
      author: "Michael K.",
      role: "Crypto Investor"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-crypto-grid bg-[length:30px_30px] opacity-5"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Testimonials & Trust</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our early beta testers have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 border-white/10 hover:border-white/20 transition-all">
              <CardContent className="p-6">
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.667 13.3333H5.33366V8.00001H10.667V13.3333ZM10.667 24H5.33366V18.6667H10.667V24ZM21.3337 13.3333H16.0003V8.00001H21.3337V13.3333ZM21.3337 24H16.0003V18.6667H21.3337V24ZM26.667 2.66667H0.000325203V29.3333H26.667V2.66667Z" fill="url(#paint0_linear)" fillOpacity="0.5"/>
                    <defs>
                      <linearGradient id="paint0_linear" x1="0.000325203" y1="2.66667" x2="26.667" y2="29.3333" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6"/>
                        <stop offset="1" stopColor="#8B5CF6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="rounded-full bg-gradient-to-r from-crypto-blue to-crypto-purple w-10 h-10 flex items-center justify-center font-bold text-white">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center">
            <Shield className="h-8 w-8 text-crypto-blue mr-4" />
            <div>
              <h3 className="font-semibold text-white">Secured by Smart Contracts</h3>
              <p className="text-sm text-muted-foreground">Trustless execution on Solana</p>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center">
            <CheckCircle className="h-8 w-8 text-crypto-purple mr-4" />
            <div>
              <h3 className="font-semibold text-white">Audited for Security</h3>
              <p className="text-sm text-muted-foreground">Code verified by leading auditors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
