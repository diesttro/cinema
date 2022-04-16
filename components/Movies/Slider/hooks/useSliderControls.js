import { useState } from 'react';

const useSliderControls = () => {
  const [controls, setControls] = useState(true);

  const setControl = (control) => (ref) => {
    setControls((value) => {
      if (!value[control]) return { ...value, [control]: ref };
      else return value;
    });
  };

  return [controls, setControl];
};

export default useSliderControls;
