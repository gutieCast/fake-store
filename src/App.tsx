import React from 'react';
import { Catalog } from './components/Catalog'
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Catalog />
    </ChakraProvider>
  );
}

export default App;
