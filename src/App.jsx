import { useRef } from 'react';

const App = () => {
  let myHeadLine = useRef();
  myHeadLine.current.innerText = 'Joy Bamngla';

  return (
    <div>
      <h1 ref={myHeadLine}></h1>
    </div>
  );
};

export default App;
