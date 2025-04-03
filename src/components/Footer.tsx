import { Link } from "react-router-dom";
import { Github, Twitter, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-white/10 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl text-gradient">CryptoFlip</span>
              <span className="text-xs font-semibold bg-crypto-purple text-white px-1.5 py-0.5 rounded ml-1">2.0</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              The first decentralized, Solana-powered betting and trading platform with dynamic odds & passive income pools.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover:text-crypto-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="text-white hover:text-crypto-purple transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white hover:text-crypto-pink transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/markets" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Betting Markets
                </Link>
              </li>
              <li>
                <Link to="/liquidity" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Liquidity Pools
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Smart Contracts
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Tokenomics
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CryptoFlip 2.0. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/" className="text-xs text-muted-foreground hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-xs text-muted-foreground hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-xs text-muted-foreground hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
