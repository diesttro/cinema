import { useState } from 'react';

const useSliderControls = () => {
  const [controls, setControls] = useState(true);

  const setControl = (control) => (ref) =>
    setControls((value) => (value[control] ? value : { ...value, [control]: ref }));

  const setPrevControl = setControl('prev');
  const setNextControl = setControl('next');

  return [controls, setPrevControl, setNextControl];
};

export default useSliderControls;
