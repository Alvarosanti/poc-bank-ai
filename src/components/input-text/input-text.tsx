// FILE: /components/input-text.tsx
import React, { useState } from 'react';

interface InputTextProps {
  onCalculate?: (num1: number, num2: number) => void; // Callback para devolver los números
  placeholder1?: string;
  placeholder2?: string;
  className?: string;
}

const InputText: React.FC<InputTextProps> = ({
  onCalculate,
  placeholder1 = 'Ingrese el primer número',
  placeholder2 = 'Ingrese el segundo número',
  className = '',
}) => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const handleCalculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, ingrese números válidos.');
      return;
    }

    onCalculate?.(num1, num2); // Devuelve los números al callback
  };

  return (
    <div>
      <input
        type="text"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
        placeholder={placeholder1}
        className={className}
      />
      <input
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
        placeholder={placeholder2}
        className={className}
      />
      <button onClick={handleCalculate}>Calcular</button>
    </div>
  );
};

export default InputText;