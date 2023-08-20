import React from 'react';
import './App.css';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>{message}</div>
  );
};

App.defaultProps = {
  message: 'Hello! defaultProps!',
};

export default App;
