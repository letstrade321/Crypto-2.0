
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Plus, DollarSign, Clock, Users } from "lucide-react";

const Markets = () => {
  const cryptoMarkets = [
    {
      name: "BTC/USD Flip",
      description: "Bet on Bitcoin price movement in the next 24 hours",
      up: 1.95,
      down: 2.05,
      liquidity: "$24.5K",
      participants: 127,
      timeLeft: "23:45:12",
      status: "live"
    },
    {
      name: "ETH/BTC Flip",
      description: "Will Ethereum outperform Bitcoin this week?",
      up: 2.10,
      down: 1.90,
      liquidity: "$18.2K",
      participants: 89,
      timeLeft: "4:12:30:45",
      status: "trending"
    },
    {
      name: "SOL/USD Flip",
      description: "Solana price movement in the next 12 hours",
      up: 2.25,
      down: 1.75,
      liquidity: "$9.7K",
      participants: 64,
      timeLeft: "11:52:30",
      status: "hot"
    }
  ];

  const eventsMarkets = [
    {
      name: "Champions League Final",
      description: "Which team will win the next Champions League Final?",
      up: 1.85,
      down: 2.15,
      liquidity: "$32.8K",
      participants: 214,
      timeLeft: "12:02:45:10",
      status: "upcoming"
    },
    {
      name: "Presidential Election",
      description: "Prediction market for the next US presidential election",
      up: 1.95,
      down: 1.95,
      liquidity: "$156.2K",
      participants: 780,
      timeLeft: "85:14:22:05",
      status: "popular"
    }
  ];

  const customMarkets = [
    {
      name: "NFT Floor Price",
      description: "Will Bored Ape floor price increase by end of month?",
      up: 2.35,
      down: 1.65,
      liquidity: "$5.3K",
      participants: 42,
      timeLeft: "16:04:15:22",
      status: "new"
    }
  ];

  const renderMarketCard = (market: any) => (
    <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">{market.name}</CardTitle>
          {market.status === "live" && (
            <span className="text-xs px-2 py-0.5 bg-crypto-blue/20 text-crypto-blue rounded-full">Live</span>
          )}
          {market.status === "trending" && (
            <span className="text-xs px-2 py-0.5 bg-crypto-purple/20 text-crypto-purple rounded-full">Trending</span>
          )}
          {market.status === "hot" && (
            <span className="text-xs px-2 py-0.5 bg-crypto-pink/20 text-crypto-pink rounded-full">Hot</span>
          )}
          {market.status === "upcoming" && (
            <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-500 rounded-full">Upcoming</span>
          )}
          {market.status === "popular" && (
            <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-500 rounded-full">Popular</span>
          )}
          {market.status === "new" && (
            <span className="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-500 rounded-full">New</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{market.description}</p>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-card rounded-lg p-3 hover:bg-card/80 transition-all cursor-pointer border border-white/5">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-400 mr-2" />
                <span className="font-medium text-white">Up</span>
              </div>
              <span className="text-green-400 font-semibold">x{market.up}</span>
            </div>
          </div>
          <div className="bg-card rounded-lg p-3 hover:bg-card/80 transition-all cursor-pointer border border-white/5">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <TrendingDown className="h-4 w-4 text-red-400 mr-2" />
                <span className="font-medium text-white">Down</span>
              </div>
              <span className="text-red-400 font-semibold">x{market.down}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <div className="flex items-center">
            <DollarSign className="h-3 w-3 mr-1" />
            <span>{market.liquidity}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            <span>{market.participants} bettors</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{market.timeLeft}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full btn-gradient">Place Bet</Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Betting Markets</h1>
            <p className="text-muted-foreground">
              Browse our live betting markets or create your own. All bets are settled instantly via smart contracts.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="crypto" className="mb-8">
              <TabsList className="w-full justify-start bg-card/50">
                <TabsTrigger value="crypto">Crypto Flips</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="custom">Custom</TabsTrigger>
              </TabsList>
              <TabsContent value="crypto" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cryptoMarkets.map((market, index) => (
                    <div key={index}>{renderMarketCard(market)}</div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="events" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventsMarkets.map((market, index) => (
                    <div key={index}>{renderMarketCard(market)}</div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="custom" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {customMarkets.map((market, index) => (
                    <div key={index}>{renderMarketCard(market)}</div>
                  ))}
                  <Card className="bg-card/30 border-dashed border-white/20 flex flex-col items-center justify-center p-8 hover:bg-card/50 transition-all cursor-pointer">
                    <Plus className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium text-white mb-2">Create Your Own Market</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Set your event, choose fixed or dynamic odds, and invite players!
                    </p>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-neon-glow">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">Create Your Own Betting Market</h2>
              <p className="text-muted-foreground mb-6">
                Have a unique event you want to bet on? Create a custom market in seconds and share it with friends.
              </p>
              <Button className="btn-gradient">
                Create Market
                <Plus className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Markets;
