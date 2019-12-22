import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import e00 from './Excercises/e00'
import e01 from './Excercises/e01'

export default function Routes(){
  return (
    <Switch>
      <Route path="/wprowadzenie" component={e00} />
      <Route path="/zadanie-01" component={e01} />
      <Route path="/" exact component={Main} />
    </Switch>
  );
}