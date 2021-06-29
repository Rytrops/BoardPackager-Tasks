import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Alert,
  Button,
} from 'react-bootstrap';
import Task from './Task';

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get('/api/v1/tasks/').then((resp) => {
      let tasks = resp.data.data;
      setTasks(tasks);
      setIsLoaded(true);
    });
  }, []);
  const checkSuccessMessage = () => {};

  return (
    isLoaded && (
      <Container className='pt-5'>
        <Row xs={2} sm={3} md={3}>
          {tasks.map((task) => {
            return <Task props={task.attributes} key={task.id} id={task.id} />;
          })}
        </Row>
      </Container>
    )
  );
};

export default Tasks;
