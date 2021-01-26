import React from 'react';
import HeroesList from '../components/HeroesList';
import HeroForm from '../components/HeroForm';

function Superheroes() {
  return (
    <div>
      <hr />
      <HeroForm />
      <hr />
      <HeroesList />
    </div>
  );
}

export default Superheroes;
