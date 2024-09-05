import React, { createContext, useContext } from 'react';

// Create a Context
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext); // Access the context value
  return <button className={theme === 'dark' ? 'btn-dark' : 'btn-light'}>Click me</button>;
}

export default App;
