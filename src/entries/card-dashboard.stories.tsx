import { useEffect } from 'react';
import type { CreditCardList } from '../lib/types';
import { mockCards } from '../mock/cards';
import CardDashboard from './card-dashboard';
import '../styles.css';

function MockToolOutput({ cardList, children }: { cardList: CreditCardList; children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.openai = {
        toolOutput: {
          cardList,
        },
      };

      window.dispatchEvent(new Event('openai:set_globals'));
    }
  }, [cardList]);

  return <>{children}</>;
}

export const NTTCards = () => (
  <div className="min-h-screenp-6">
    <MockToolOutput cardList={mockCards}>
      <CardDashboard />
    </MockToolOutput>
  </div>
);

NTTCards.storyName = 'Ntt-cards';
