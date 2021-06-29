import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import Tasks from './tasks/Tasks';
import TaskShow from './tasks/TaskShow';

const App = () => {
  return (
    <div className='bg-light vh-100'>
      <Router>
        <Switch>
          <Route exact path='/' component={Tasks} />
          <Route exact path='/tasks/:id' component={TaskShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
