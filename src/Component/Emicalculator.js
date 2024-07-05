import React, { useState } from 'react';
import'./Emicalculator.css'

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState('');

  const calculateEmi = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure) * 12;
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className='emi-calculator'>
      <h2>EMI Calculator</h2>
      <div>
        <label>Loan Amount (INR)</label>
        <input
        id="loan-amount"
          type="range"
          min="0" max="10000000" step="1000"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
        <span id='principal'>{principal}</span>
      </div>
      <div>
        <label>Interest Rate (%)</label>
         <input
        id="intrest-rate"
          type="range"
          min="0" max="100" step=".01"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <span>{rate}</span>
      </div>
      <div className='tenure'>
        <label>Tenure (years)</label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        />
      </div>
      <button onClick={calculateEmi}>Calculate EMI</button>
      {emi && (
        <div className='emi-result'>   
          <h3>EMI: INR {emi}</h3>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;
