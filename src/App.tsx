import { useEffect, useMemo, useState } from 'react';
import CardDashboard from './entries/card-dashboard';
import type { CreditCard } from './lib/types';
import { mockCards } from './mock/cards';

type ViewMode = 'list' | 'detail';

function App() {
  const [view, setView] = useState<ViewMode>('list');
  const [selectedId, setSelectedId] = useState<string>(mockCards[0]?.id ?? '');

  const selectedCard = useMemo(
    () => mockCards.find(card => card.id === selectedId) ?? mockCards[0],
    [selectedId],
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.openai = {
      toolOutput: {
        cardList: mockCards,
      },
    };

    window.dispatchEvent(new Event('openai:set_globals'));
  }, [selectedCard]);

  return (
    <div className="min-h-screen px-4 py-6 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">POC</p>
              <h1 className="font-display text-3xl font-black text-slate-900">BCP Credit Cards IA</h1>
              <p className="text-sm text-slate-500">Vista de catálogo + detalle con data mock</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${view === 'list' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                onClick={() => setView('list')}
              >
                Catalogo
              </button>
              <button
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${view === 'detail' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                onClick={() => setView('detail')}
              >
                Detalle
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Tarjeta demo</span>
            <select
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
              value={selectedId}
              onChange={event => setSelectedId(event.target.value)}
            >
              {mockCards.map((card: CreditCard) => (
                <option key={card.id} value={card.id}>
                  {card.name}
                </option>
              ))}
            </select>
          </div>
        </header>

        {view === 'list' ? <CardDashboard /> : null}
      </div>
    </div>
  );
}

export default App;
