import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as heroesActionCreators from './../../actions/heroesActionsCreators';

function HeroesListItem (props) {
  const {
    // eslint-disable-next-line react/prop-types
    hero: { id, nickname, realName, originDescription, catchPhrase, superpowers }
  } = props;

  return (
    <li key={id}>
      nickname: {nickname}, realName: {realName}, originDescription: {originDescription}, catchPhrase: {catchPhrase},
      superpowers: {superpowers},
    </li>
  );
}

function HeroesList () {
  const { heroes, isFetching, error } = useSelector(state => state.heroes);
  const dispatch = useDispatch();
  const { getHeroes } = bindActionCreators(heroesActionCreators, dispatch);

  useEffect(() => {
    getHeroes({page:1, results:10});
  }, []);

  return (
    <ul>
      {heroes.map(h => (
        // eslint-disable-next-line react/jsx-key
        <HeroesListItem hero={h} />
      ))}
      {isFetching && <li>Loading...</li>}
      {error && <li>ERROR</li>}
    </ul>
  );
}

export default HeroesList;
