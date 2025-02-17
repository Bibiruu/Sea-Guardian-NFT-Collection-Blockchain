import React from 'react';
import { NFTCard } from './components/NFTCard';
import { NFTFooter } from './components/NFTFooter';

export const App = () => {
  return (
    <div className="App">
      <NFTCard />
      <NFTFooter />
    </div>
  );
}