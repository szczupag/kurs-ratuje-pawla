import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import Fb from './Main/fb'
import e_wstep from './Excercises/e_wstep'
import e_struktura from './Excercises/e_struktura'
import e_tekst from './Excercises/e_tekst'
import e_lista from './Excercises/e_lista'
import e_link from './Excercises/e_link'
import e_obraz from './Excercises/e_obraz'
import e_blockinline from './Excercises/e_blockinline'

export default function Routes(){
  return (
    <Switch>
      <Route path="/wprowadzenie" component={e_wstep} />
      <Route path="/struktura-html" component={e_struktura} />
      <Route path="/tagowanie-tekstu" component={e_tekst} />
      <Route path="/link" component={e_link} />
      <Route path="/lista" component={e_lista} />
      <Route path="/obraz" component={e_obraz} />
      <Route path="/inline-vs-block" component={e_blockinline} />
      <Route path="/fb" component={Fb} />
      <Route path="/" exact component={Main} />
    </Switch>
  );
}