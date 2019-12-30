import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import Fb from './Main/fb'
import e00 from './Excercises/e00'
import e01 from './Excercises/e01'
import e02 from './Excercises/e02'
import e03 from './Excercises/e03'
import e04 from './Excercises/e04'

const CustomRoute = ({ path, component, ...other }) => <Route path={`${process.env.PUBLIC_URL}/${path}`} component={component} {...other} />

export default function Routes(){
  return (
    <Switch>
      <CustomRoute path="/wprowadzenie" component={e00} />
      <CustomRoute path="/struktura-html" component={e01} />
      <CustomRoute path="/tagowanie-tekstu" component={e02} />
      <CustomRoute path="/lista" component={e03} />
      <CustomRoute path="/obrazy" component={e04} />
      <CustomRoute path="/fb" component={Fb} />
      <CustomRoute path="/" exact component={Main} />
    </Switch>
  );
}