
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, TrendingUp, Clock, BarChart3 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Liquidity = () => {
  const lpPools = [
    {
      name: "Low-Risk Pool",
      description: "Stable returns with lower house edge",
      houseEdge: "2-3%",
      lockPeriod: "7 Days",
      liquidity: "$1.2M",
      utilization: 68,
      expectedApy: "12-15%",
      risk: "low"
    },
    {
      name: "Medium-Risk Pool",
      description: "Balanced risk and reward",
      houseEdge: "3-5%",
      lockPeriod: "14 Days",
      liquidity: "$845K",
      utilization: 75,
      expectedApy: "18-22%",
      risk: "medium"
    },
    {
      name: "High-Risk Pool",
      description: "Maximum returns for risk-tolerant LPs",
      houseEdge: "5-8%",
      lockPeriod: "30 Days",
      liquidity: "$420K",
      utilization: 83,
      expectedApy: "25-35%",
      risk: "high"
    }
  ];

  const lpStats = {
    totalLiquidity: "$2.46M",
    activeLPs: 843,
    totalEarnings: "$127K",
    averageApy: "19.5%"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Be the House</h1>
            <p className="text-muted-foreground">
              Earn passive income by providing liquidity to betting markets. Choose your risk level and lock-in period for stable returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Total Liquidity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white">{lpStats.totalLiquidity}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Active LPs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white">{lpStats.activeLPs}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Total Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white">{lpStats.totalEarnings}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Average APY</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white">{lpStats.averageApy}</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="mb-12 bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">How Liquidity Works</h2>
              <p className="text-muted-foreground mb-6">
                When you provide liquidity to CryptoFlip 2.0, you're essentially becoming the house in traditional betting. Your funds back bets placed by users, and you earn a share of the house edge from losing bets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card p-5 rounded-xl border border-white/10">
                  <div className="rounded-full bg-crypto-blue/20 p-2 w-fit mb-3">
                    <Shield className="h-5 w-5 text-crypto-blue" />
                  </div>
                  <h3 className="font-medium text-white mb-2">Choose your risk level</h3>
                  <p className="text-sm text-muted-foreground">
                    Select from low, medium, or high-risk pools with different house edges and potential returns.
                  </p>
                </div>
                
                <div className="bg-card p-5 rounded-xl border border-white/10">
                  <div className="rounded-full bg-crypto-purple/20 p-2 w-fit mb-3">
                    <Clock className="h-5 w-5 text-crypto-purple" />
                  </div>
                  <h3 className="font-medium text-white mb-2">Lock in your funds</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose a lock period, from 7 to 30 days, with longer periods offering higher returns.
                  </p>
                </div>
                
                <div className="bg-card p-5 rounded-xl border border-white/10">
                  <div className="rounded-full bg-crypto-pink/20 p-2 w-fit mb-3">
                    <TrendingUp className="h-5 w-5 text-crypto-pink" />
                  </div>
                  <h3 className="font-medium text-white mb-2">Earn passive income</h3>
                  <p className="text-sm text-muted-foreground">
                    Collect your share of betting fees and house edge automatically via smart contracts.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-white">Risk-Based LP Pools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lpPools.map((pool, index) => (
                <Card 
                  key={index} 
                  className={`
                    bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all
                    ${pool.risk === 'low' ? 'hover:shadow-neon-blue' : ''}
                    ${pool.risk === 'medium' ? 'hover:shadow-neon-purple' : ''}
                    ${pool.risk === 'high' ? 'hover:shadow-neon-glow' : ''}
                  `}
                >
                  <CardHeader>
                    <CardTitle className="text-white">{pool.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{pool.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">House Edge:</span>
                      <span className="font-medium text-white">{pool.houseEdge}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Lock Period:</span>
                      <span className="font-medium text-white">{pool.lockPeriod}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Current Liquidity:</span>
                      <span className="font-medium text-white">{pool.liquidity}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Expected APY:</span>
                      <span 
                        className={`font-medium ${
                          pool.risk === 'low' ? 'text-crypto-blue' : 
                          pool.risk === 'medium' ? 'text-crypto-purple' : 'text-crypto-pink'
                        }`}
                      >
                        {pool.expectedApy}
                      </span>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Utilization</span>
                        <span className="text-white">{pool.utilization}%</span>
                      </div>
                      <Progress 
                        value={pool.utilization} 
                        className={
                          pool.risk === 'low' ? 'bg-crypto-blue/20' : 
                          pool.risk === 'medium' ? 'bg-crypto-purple/20' : 'bg-crypto-pink/20'
                        }
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={
                        pool.risk === 'low' ? 'bg-crypto-blue hover:bg-crypto-blue/90 w-full' : 
                        pool.risk === 'medium' ? 'bg-crypto-purple hover:bg-crypto-purple/90 w-full' : 
                        'bg-crypto-pink hover:bg-crypto-pink/90 w-full'
                      }
                    >
                      Join Pool
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-neon-glow">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Start Earning?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Lock your funds in our liquidity pools and start earning passive income today. The longer you stake, the higher your potential returns.
                </p>
                <Button className="btn-gradient">
                  Connect Wallet to Join LP Pool
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Liquidity;
