import React from 'react';
import View from './View/View';
import getPast from "./calculation/getPast";

function CalenderApp() {
  // Get full life object
  const myLife = getPast(1997);

  // Create new display object and map life
  const display = [];
  myLife.forEach((element) => {
    element.data.forEach(value => {
      display.push(value);
    })
  });

  return (
    <div>
      <View display={display} />
    </div>
  );
}

export default CalenderApp;