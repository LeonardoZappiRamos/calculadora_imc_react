import { useState } from "react";

import styles from './Calculator.module.css';

const Calculator = () => {
  let [height, setHeight] = useState(0);
  let [weight, setWeight] = useState(0);

  const imc = () => {
    const result =  weight / (height * height)
    return parseFloat(result).toFixed(2);
  }

  const thinness = () => { 
    if(imc() < 18.5) { 
      return styles.hightlitter; 
    } 
  }
  const normal = () => { 
    if(imc() > 18.5 && imc() < 24.9) { 
      return styles.hightlitter; 
    }
  }
  const overweight = () => { 
    if(imc() > 25.0 && imc() < 29.9) { 
      return styles.hightlitter; 
    }
  }
  const obesity = () => { 
    if(imc() > 30.0 && imc() < 39.9) { 
      return styles.hightlitter; 
    }
  }
  const severeObesity = () => { 
    if(imc() > 40) { 
      return styles.hightlitter; 
    }
  }

  return (
    <>
      <div className={ styles.calculatorBody }>
        <form className={ styles.form }>
          <div>
            <label className={ styles.label } htmlFor="height">Height (m): </label>
            <input className={ styles.input } type="number" id="height" onChange={event => setHeight(event.target.value)} placeholder="1,80"/>
          </div>
          <div>
            <label className={ styles.label } htmlFor="weight">Weight (kg): </label>
            <input className={ styles.input } type="number" id="weight" onChange={event => setWeight(event.target.value)} placeholder="80"/>
          </div>
        </form>
        <div className={ styles.result }>
          <p className={ styles.resultText }>IMC = {imc()} </p>
          <table className={ styles.table }>
              <thead>
                <tr>
                  <th>IMC</th>
                  <th>Classification</th>
                  <th>Obesity (degree)</th>
                </tr>
              </thead>
              <tbody>
                <tr className={ thinness() }>
                  <td>lower that 18,5</td>
                  <td>Thinness</td>
                  <td>0</td>
                </tr>
                <tr className={ normal() }>
                  <td>between 18,5 and 24,9</td>
                  <td>Normal</td>
                  <td>0</td>
                </tr>
                <tr className={ overweight() }>
                  <td>between 25,0 and 29,9</td>
                  <td>overweight</td>
                  <td>I</td>
                </tr>
                <tr className={ obesity() }>
                  <td>between 30,0 and 39,9</td>
                  <td>Obesity</td>
                  <td>II</td>
                </tr>
                <tr className={ severeObesity() }>
                  <td>higher that 40,0</td>
                  <td>Severe Obesity</td>
                  <td>III</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Calculator;