import React from 'react';
import LegendInformation from './LegendInformation';
import LegendHeader from './LegendHeader';
import './styles.css';

const Legend = () => {
  const legendInformation = [
    {
      color: 'linear-gradient(45deg, #13B1B7, #11C2C9)',
      description: 'Currently involved in the swap process',
    },
    {
      color: 'linear-gradient(45deg, #287ED0, #5466FF)',
      description: 'Not involved in the swap process',
    },
  ];

  return (
    <div className="legend">
      <div className="legend-header-box">
        <LegendHeader />
      </div>
      <div className="legend-information-box">
        {legendInformation.map(({ color, description }, index) => (
          <LegendInformation color={color} description={description} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Legend;