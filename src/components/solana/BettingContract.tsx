import { FC, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

// This would be your actual program ID
const BETTING_PROGRAM_ID = new PublicKey('YOUR_PROGRAM_ID_HERE');

export const BettingContract: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [amount, setAmount] = useState('');

  const placeBet = async () => {
    if (!publicKey) {
      toast.error('Please connect your wallet first');
      return;
    }

    try {
      const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;
      
      // Create a new transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: BETTING_PROGRAM_ID,
          lamports,
        })
      );

      // Get the latest blockhash
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;

      // Send the transaction
      const signature = await sendTransaction(transaction, connection);
      
      // Wait for confirmation
      const confirmation = await connection.confirmTransaction(signature);
      
      if (confirmation.value.err) {
        throw new Error('Transaction failed');
      }

      toast.success('Bet placed successfully!');
      setAmount('');
    } catch (error) {
      console.error('Error placing bet:', error);
      toast.error('Failed to place bet. Please try again.');
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-card rounded-lg border border-white/10">
      <h3 className="text-xl font-semibold">Place a Bet</h3>
      <div className="flex gap-4">
        <Input
          type="number"
          placeholder="Amount in SOL"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1"
        />
        <Button 
          onClick={placeBet}
          disabled={!publicKey || !amount}
          className="btn-gradient"
        >
          Place Bet
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Note: This is a basic example. In production, you would need to implement proper betting logic,
        odds calculation, and result verification in your smart contract.
      </p>
    </div>
  );
};

export default BettingContract; 