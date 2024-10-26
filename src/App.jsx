import { useState } from 'react';

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState([]);

  return (
    <div>
      <input placeholder="Item" />
      <button>Add</button>
    </div>
  );
};

export default App;
