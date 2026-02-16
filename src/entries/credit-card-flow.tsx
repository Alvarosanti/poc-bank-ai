import { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import CREDIT_CARDS from '../mock/credit-cards.js';
import type { CreditCard } from '../../../../poc-apps-openai/web/src/lib/types.js';
import CreditCardComp from '../components/credit-card/credit-card.js';

const INCOME_OPTIONS = [
  { id: 'inc1', label: 'Menos de 500€', value: 0 },
  { id: 'inc2', label: '500€ - 1.199€', value: 500 },
  { id: 'inc3', label: '1.200€ - 2.999€', value: 1200 },
  { id: 'inc4', label: '3.000€ o más', value: 3000 },
];

const PREFERENCE_OPTIONS = [
  { id: 'pref1', label: 'Cashback', key: 'cashback' },
  { id: 'pref2', label: 'Viajes', key: 'travel' },
  { id: 'pref3', label: 'Bajo interés', key: 'lowInterest' },
  { id: 'pref4', label: 'Prestigio', key: 'premium' },
];

export default function CreditCardFlow() {
  const [step, setStep] = useState(0);
  const [income, setIncome] = useState<number | null>(null);
  const [preference, setPreference] = useState<string | null>(null);
  const [dni, setDni] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);

  const matched = useMemo(() => {
    if (income == null || preference == null) return [] as CreditCard[];
    return CREDIT_CARDS.filter((c) => c.minIncome <= income && c.features.includes(preference));
  }, [income, preference]);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow">
        <h2 className="text-2xl font-black mb-4">Asistente: Encuentra tu tarjeta</h2>

        {step === 0 && (
          <div>
            <p className="mb-3">¿Cuál es tu ingreso mensual?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {INCOME_OPTIONS.map(o => (
                <button key={o.id} onClick={() => { setIncome(o.value); setStep(1); }} className="p-3 border rounded-lg text-left hover:bg-slate-100">
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <p className="mb-3">¿Qué buscas principalmente en una tarjeta de crédito?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {PREFERENCE_OPTIONS.map(p => (
                <button key={p.id} onClick={() => { setPreference(p.key); setStep(2); }} className="p-3 border rounded-lg text-left hover:bg-slate-100">
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="mb-3">Bríndame tu número de DNI y una foto para verificar tu elegibilidad.</p>
            <div className="grid gap-2">
              <label className="flex flex-col">
                <span className="text-sm font-medium">1. Nro de DNI:</span>
                <input value={dni} onChange={(e) => setDni(e.target.value)} placeholder="Ej: 12345678" className="mt-1 p-2 border rounded" />
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium">2. Tomar foto:</span>
                <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files?.[0] ?? null)} className="mt-1" />
              </label>

              <div className="flex gap-2 mt-3">
                <button onClick={() => setStep(1)} className="px-4 py-2 border rounded">Atrás</button>
                <button onClick={() => setStep(3)} className="px-4 py-2 bg-blue-600 text-white rounded">Ver resultados</button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="mb-3">Resultados: {matched.length} tarjetas encontradas</p>
            {matched.length === 0 && <div className="p-4 bg-yellow-50 rounded">No encontramos tarjetas que cumplan tus requisitos.</div>}

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {matched.map(card => (
                <CreditCardComp key={card.id} card={card} />
              ))}
            </div> */}

            <div className="mt-6">
              <button onClick={() => { setStep(0); setIncome(null); setPreference(null); setDni(''); setPhoto(null); }} className="px-4 py-2 border rounded">Empezar de nuevo</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Solo renderizar si no estamos en Ladle/Storybook
if (typeof window !== 'undefined' && document.getElementById('root')) {
  const root = createRoot(document.getElementById('root')!);
  root.render(<CreditCardFlow />);
}
