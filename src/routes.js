import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import Fb from './Main/fb'
import e00 from './Excercises/e00'
import e01 from './Excercises/e01'
import e02 from './Excercises/e02'

export default function Routes(){
  return (
    <Switch>
      <Route path="/wprowadzenie" component={e00} />
      <Route path="/struktura-html" component={e01} />
      <Route path="/tagowanie-tekstu" component={e02} />
      <Route path="/fb" component={Fb} />
      <Route path="/" exact component={Main} />
    </Switch>
  );
}