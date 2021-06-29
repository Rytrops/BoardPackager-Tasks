import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Button } from 'react-bootstrap';
import Task from './Task';

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showDueToday, setShowDueToday] = useState(false);

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
      <div className='bg-light h-100'>
        <Container className='pt-5'>
          <Row className='pb-2'>
            <Button
              onClick={(e) => {
                setShowDueToday(!showDueToday);
              }}
            >
              Tasks Due Today
            </Button>
          </Row>
          <Row xs={2} sm={3} md={3}>
            {tasks.map((task) => {
              if (showDueToday && task.attributes.due_today) {
                return (
                  <Task props={task.attributes} key={task.id} id={task.id} />
                );
              } else if (!showDueToday) {
                return (
                  <Task props={task.attributes} key={task.id} id={task.id} />
                );
              }
            })}
          </Row>
        </Container>
      </div>
    )
  );
};

export default Tasks;
