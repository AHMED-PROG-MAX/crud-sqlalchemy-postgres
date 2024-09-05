import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* Button to increment the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
