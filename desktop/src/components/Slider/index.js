import React, { useState, useEffect } from 'react';

import { Container } from './styles';

export default function Slider({
  state = 0,
  onChange,
  min = 0,
  max,
  step = 0.0001,
  width,
  ...rest
}) {
  const [value, setValue] = useState(Number(state));

  useEffect(() => {
    setValue(Number(state) / step);
  }, [state, step]);

  function handleMouseUp(e) {
    onChange(e.target.value * step);
  }

  return (
    <Container
      width={width}
      type="range"
      min={min}
      max={max / step}
      value={value}
      onChange={e => setValue(e.target.value)}
      onMouseUp={handleMouseUp}
      {...rest}
    />
  );
}
