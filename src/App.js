import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TopicPage from './components/TopicPage/TopicPage_container';
import ShowQuestion from './components/QuestionPage/Question_show';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/:topic/:id" component={ShowQuestion} />
            <Route path="/:topic" component={TopicPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
