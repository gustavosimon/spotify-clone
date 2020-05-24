import React, { useState, useEffect } from 'react';

import { Container } from './styles';

export default function Slider({
  state = 0,
  onChange,
  min = 0,
  max,
  step = 0.0001,
  width,
}) {
  const [value, setValue] = useState(Number(state));

  useEffect(() => {
    setValue(Number(state) / step);
  }, [state, step]);

  function handleMouseUp(e) {
    onChange(e.target.value * step);
  }

  return (
    <>
      {console.log(value, state, min, max, step, width)}
      <Container
        width={width}
        type="range"
        min={min}
        max={max / step}
        value={value}
        onChange={e => setValue(e.target.value)}
        onMouseUp={handleMouseUp}
      />
    </>
  );
}
