import React from 'react';
import { Header } from './components';
import { Catalog } from './components/Catalog'
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Header />
      <Catalog />
    </ChakraProvider>
  );
}

export default App;
