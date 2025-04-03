import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from '@/components/ui/button';

export const WalletButton: FC = () => {
  const { wallet, connected } = useWallet();

  return (
    <div className="flex items-center gap-2">
      {connected ? (
        <Button variant="outline" className="bg-green-500/10 text-green-500">
          Connected: {wallet?.adapter.name}
        </Button>
      ) : (
        <WalletMultiButton className="wallet-adapter-button" />
      )}
    </div>
  );
};

export default WalletButton; 