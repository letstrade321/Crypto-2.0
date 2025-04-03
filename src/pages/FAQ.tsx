
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is CryptoFlip 2.0 Decentralized?",
      answer: "Yes, CryptoFlip 2.0 is fully decentralized and runs on Solana smart contracts. All bets, liquidity provision, and payouts are managed by immutable code on the blockchain, with no centralized authority controlling the platform."
    },
    {
      question: "How Do I Withdraw Winnings?",
      answer: "Winnings are paid out automatically to your connected wallet in USDC immediately after a bet is settled. There's no need to manually claim your winnings - our smart contracts handle everything instantly."
    },
    {
      question: "How Do I Become an LP?",
      answer: "To become a Liquidity Provider (LP), connect your wallet, navigate to the 'Be the House' page, select your preferred risk level and lock-in period, and deposit funds. You'll start earning passive income from the betting markets right away."
    },
    {
      question: "What Types of Bets Can I Place?",
      answer: "You can place bets on crypto price movements (e.g., will BTC go up or down in the next 24 hours), sports events, elections, and virtually any other outcome. You can also create custom markets for any event you want to bet on."
    },
    {
      question: "What Are the Fees?",
      answer: "CryptoFlip 2.0 charges a small protocol fee of 0.5% on all bets. This fee is used to maintain the platform and reward token holders. Solana network fees are minimal, typically less than $0.01 per transaction."
    },
    {
      question: "How Are Odds Determined?",
      answer: "Odds are determined either as fixed odds set by the market creator or dynamic odds that adjust based on the amount of liquidity and betting volume on each side of the market. All odds calculations are transparent and on-chain."
    },
    {
      question: "Is There a Minimum Bet Amount?",
      answer: "The minimum bet amount is 1 USDC. This low threshold ensures that everyone can participate in the betting markets regardless of their budget."
    },
    {
      question: "How Safe Are My Funds as an LP?",
      answer: "Your funds as an LP are secured by smart contracts that have been audited by leading security firms. The main risk is that if a disproportionate number of bettors win, the pool may experience temporary losses. However, our risk management system is designed to balance these risks over time."
    },
    {
      question: "Can I Create My Own Betting Market?",
      answer: "Yes! Anyone can create their own betting market on CryptoFlip 2.0. Simply define the event, set the parameters, choose between fixed or dynamic odds, and publish it to the platform."
    },
    {
      question: "How Are Disputes Resolved?",
      answer: "Since all bets are settled based on verifiable data feeds and smart contracts, disputes are rare. In cases where an oracle might provide incorrect data, we have a decentralized governance system that can propose and vote on resolutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">FAQs & Security</h1>
            <p className="text-muted-foreground">
              Common questions answered and details about our security measures.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-neon-glow">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="rounded-full bg-card p-6">
                  <Shield className="h-12 w-12 text-crypto-purple" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-4 text-white">Smart Contract Security & Transparency</h2>
                  <p className="text-muted-foreground mb-6">
                    Our smart contracts are audited by leading security firms to ensure the highest level of security for your funds. All code is open-source and verifiable on the blockchain.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="border-white/20">
                      View Audits
                    </Button>
                    <Button variant="outline" className="border-white/20">
                      Explore Smart Contracts
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Please visit our community channels or contact our support team.
            </p>
            <Button className="btn-gradient">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
