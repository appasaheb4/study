import React, {useImperativeHandler, forwardRef, useRef} from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const childFunction = () => {
    console.log('Child function called.');
  };

  useImperativeHandler(ref, () => ({
    childFunction,
  }));

  return <div>Child Component</div>;
});

const ParentComponent = () => {
  const childRef = useRef();

  const callChildFunction = () => {
    if (childRef.current) {
      childRef.current.childFunction();
    }
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={() => callChildFunction()}>
        Call Child Function from Parent
      </button>
    </div>
  );
};
