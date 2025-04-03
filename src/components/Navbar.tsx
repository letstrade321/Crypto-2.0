import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import WalletButton from "@/components/solana/WalletButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="font-bold text-2xl text-gradient">CryptoFlip</span>
            <span className="text-xs font-semibold bg-crypto-purple text-white px-1.5 py-0.5 rounded ml-1">2.0</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-white hover:text-crypto-purple transition-colors">
            Home
          </Link>
          <Link to="/markets" className="text-sm font-medium text-white hover:text-crypto-purple transition-colors">
            Betting Markets
          </Link>
          <Link to="/liquidity" className="text-sm font-medium text-white hover:text-crypto-purple transition-colors">
            Be the House
          </Link>
          <Link to="/faq" className="text-sm font-medium text-white hover:text-crypto-purple transition-colors">
            FAQs
          </Link>
          <Link to="/community" className="text-sm font-medium text-white hover:text-crypto-purple transition-colors">
            Community
          </Link>
          <WalletButton />
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-white/10 py-4 px-4 absolute w-full">
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-white hover:text-crypto-purple py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/markets" 
              className="text-white hover:text-crypto-purple py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Betting Markets
            </Link>
            <Link 
              to="/liquidity" 
              className="text-white hover:text-crypto-purple py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Be the House
            </Link>
            <Link 
              to="/faq" 
              className="text-white hover:text-crypto-purple py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              to="/community" 
              className="text-white hover:text-crypto-purple py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <WalletButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
