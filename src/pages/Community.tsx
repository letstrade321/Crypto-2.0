import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Twitter, Send, Github } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Join the CryptoFlip Community</h1>
            <p className="text-muted-foreground">
              Connect with other bettors and liquidity providers. Stay updated on new betting markets and LP opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-crypto-purple/50 transition-all group">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-crypto-purple/20 flex items-center justify-center mb-4 group-hover:bg-crypto-purple/30 transition-all">
                  <MessageSquare className="h-8 w-8 text-crypto-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Discord</h3>
                <p className="text-muted-foreground mb-4">
                  Join our active Discord community to chat with the team and other users.
                </p>
                <Button className="bg-[#5865F2] hover:bg-[#5865F2]/90 w-full">
                  Join Discord
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-crypto-blue/50 transition-all group">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-crypto-blue/20 flex items-center justify-center mb-4 group-hover:bg-crypto-blue/30 transition-all">
                  <Twitter className="h-8 w-8 text-crypto-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Twitter</h3>
                <p className="text-muted-foreground mb-4">
                  Follow us on Twitter for the latest updates, announcements, and promotions.
                </p>
                <Button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 w-full">
                  Follow on Twitter
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-crypto-pink/50 transition-all group">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-crypto-pink/20 flex items-center justify-center mb-4 group-hover:bg-crypto-pink/30 transition-all">
                  <Github className="h-8 w-8 text-crypto-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">GitHub</h3>
                <p className="text-muted-foreground mb-4">
                  Check out our open-source code and contribute to the platform's development.
                </p>
                <Button className="bg-[#333] hover:bg-[#333]/90 w-full">
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 bg-gradient-to-br from-crypto-blue/20 to-crypto-purple/20">
                  <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
                  <p className="text-muted-foreground mb-6">
                    Have questions or feedback? Want to report an issue? Our team is here to help.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-white mb-1">Email</h4>
                      <p className="text-muted-foreground">support@cryptoflip.io</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white mb-1">Response Time</h4>
                      <p className="text-muted-foreground">Usually within 24 hours</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white mb-1">Support Hours</h4>
                      <p className="text-muted-foreground">24/7 for emergency issues</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-white">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" className="bg-card border-white/10" />
                    </div>
                    <div>
                      <Input placeholder="Email Address" className="bg-card border-white/10" />
                    </div>
                    <div>
                      <Textarea placeholder="Your Message" className="bg-card border-white/10 min-h-[120px]" />
                    </div>
                    <Button className="w-full btn-gradient">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Want to Partner With Us?</h2>
            <p className="text-muted-foreground mb-6">
              We're always open to strategic partnerships and collaborations. Reach out to our team to discuss opportunities.
            </p>
            <Button variant="outline" className="border-white/20">
              Contact for Partnerships
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
