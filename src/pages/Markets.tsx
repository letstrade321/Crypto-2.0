import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, TrendingUp, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BettingContract from "@/components/solana/BettingContract";

// Sample market data
const markets = [
  {
    id: 1,
    category: "crypto",
    title: "BTC Price Movement",
    description: "Bitcoin price movement in the next 12 hours",
    odds: { up: 2.1, down: 1.9 },
    volume: "125.5K",
    endTime: "12h",
  },
  {
    id: 2,
    category: "crypto",
    title: "SOL Price Movement",
    description: "Solana price movement in the next 12 hours",
    odds: { up: 1.8, down: 2.2 },
    volume: "75.2K",
    endTime: "12h",
  },
  {
    id: 3,
    category: "sports",
    title: "Lakers vs Warriors",
    description: "NBA Regular Season Game Winner",
    odds: { home: 1.95, away: 1.85 },
    volume: "250K",
    endTime: "2h",
  },
  {
    id: 4,
    category: "sports",
    title: "Man City vs Arsenal",
    description: "Premier League Match Winner",
    odds: { home: 1.75, away: 2.15, draw: 3.5 },
    volume: "180K",
    endTime: "1h",
  },
];

const Markets = () => {
  const [selectedMarket, setSelectedMarket] = useState(markets[0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Betting Markets</h1>
            <p className="text-muted-foreground">
              Choose from a variety of markets to place your bets. All bets are secured by smart
              contracts on the Solana blockchain.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Markets</TabsTrigger>
              <TabsTrigger value="crypto">Crypto</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="viral">Viral Events</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {markets.map((market) => (
                  <Card
                    key={market.id}
                    className={`p-6 cursor-pointer transition-all hover:border-primary ${
                      selectedMarket.id === market.id ? "border-primary" : ""
                    }`}
                    onClick={() => setSelectedMarket(market)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{market.title}</h3>
                        <p className="text-sm text-muted-foreground">{market.description}</p>
                      </div>
                      <Badge variant="outline" className="bg-primary/10">
                        {market.category.toUpperCase()}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-medium">${market.volume}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-medium">
                            {Object.values(market.odds)
                              .map((odd) => odd.toFixed(2))
                              .join(" / ")}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowUpDown className="w-4 h-4" />
                        <span className="text-sm">{market.endTime}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Selected Market Details & Betting Interface */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6">Place Your Bet</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">{selectedMarket.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedMarket.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(selectedMarket.odds).map(([position, odd]) => (
                    <Button
                      key={position}
                      variant="outline"
                      className="w-full"
                    >
                      {position.toUpperCase()}: {odd.toFixed(2)}x
                    </Button>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Volume: ${selectedMarket.volume}</span>
                  <span>Ends in: {selectedMarket.endTime}</span>
                </div>
              </Card>
              
              <BettingContract />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Markets;
