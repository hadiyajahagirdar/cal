import React, { useState } from 'react';

function About() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (num1 === '' || num2 === '') {
      setError('Please enter two numbers.');
      return false;
    }

    const regex = /^[+-]?\d+(\.\d+)?$/;
    if (!regex.test(num1) || !regex.test(num2)) {
      setError('Please enter valid numbers.');
      return false;
    }

    return true;
  };

  const handleAddition = () => {
    if (validateInputs()) {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(sum.toFixed(2));
      setError('');
    }
  };

  const handleSubtraction = () => {
    if (validateInputs()) {
      const difference = parseFloat(num1) - parseFloat(num2);
      setResult(difference.toFixed(2));
      setError('');
    }
  };

  const handleMultiplication = () => {
    if (validateInputs()) {
      const product = parseFloat(num1) * parseFloat(num2);
      setResult(product.toFixed(2));
      setError('');
    }
  };

  const handleDivision = () => {
    if (validateInputs()) {
      if (parseFloat(num2) === 0) {
        setError('Cannot divide by zero.');
        setResult('');
      } else {
        const quotient = parseFloat(num1) / parseFloat(num2);
        setResult(quotient.toFixed(2));
        setError('');
      }
    }
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <label>Number 1:</label>
      <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <br />
      <label>Number 2:</label>
      <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <br />
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleSubtraction}>Subtract</button>
      <button onClick={handleMultiplication}>Multiply</button>
      <button onClick={handleDivision}>Divide</button>
      <br />
      {error && <div >{error}</div>}
      {result && <div>Result: {result}</div>}
    </div>
  );
}

export default About;
