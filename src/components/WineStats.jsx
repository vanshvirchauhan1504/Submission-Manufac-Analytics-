import React from 'react';
import wineData from '../utils/wineData';

import './WineStats.css';

const WineStats = () => {


    const calculateMean = (data) => {
        const meanValues = {};
        Object.keys(data[0]).forEach(property => {
          const propertyValues = data.map(wine => wine[property]);


          const sum = propertyValues.reduce((accumulator, currentValue) => {
            const numValue = Number(currentValue);
            if (!isNaN(numValue)) { 
              return accumulator + numValue;
            } else {
              return accumulator;
            }
          }, 0);

          meanValues[property] = sum / propertyValues.length;
        });
        return meanValues;
      };
    
    const meanValues = calculateMean(wineData);

    return (
    <div className="mean-stats">
    <h2>Statistical Measures of Wine Data Set</h2>
      <table className="mean-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Mean Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(meanValues).map(property => (
            <tr key={property}>
              <td>{property}</td>
              <td>{meanValues[property].toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>

  );
};

export default WineStats;
