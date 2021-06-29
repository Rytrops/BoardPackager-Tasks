import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateTask from './tasks/CreateTask';
import EditTask from './tasks/EditTask';
import Tasks from './tasks/Tasks';
import TaskShow from './tasks/TaskShow';

const App = () => {
  return (
    <div className='bg-light vh-100'>
      <Router>
        <Switch>
          <Route exact path='/' component={Tasks} />
          <Route exact path='/tasks/:id' component={TaskShow} />
          <Route exact path='/create' component={CreateTask} />
          <Route exact path='/tasks/:id/edit' component={EditTask} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
