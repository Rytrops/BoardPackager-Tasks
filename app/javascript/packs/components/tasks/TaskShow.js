import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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

const TaskShow = () => {
  const [task, setTask] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();
  const { title, description, due_date, completed, created_at, overdue } = task;

  useEffect(() => {
    axios.get(`/api/v1/tasks/${id}`).then((resp) => {
      let task = resp.data.data.attributes;
      setTask(task);
      setIsLoaded(true);
    });
  }, []);

  const color = () => {
    if (overdue && !completed) {
      return 'danger';
    } else if (completed) {
      return 'success';
    } else {
      return 'primary';
    }
  };

  return (
    isLoaded && (
      <div className='bg-light h-100'>
        <Container>
          <Row>
            <Col className='col-9 mx-auto pt-5'>
              <Card
                className='text-center'
                border={color()}
                style={{ width: 'auto', height: 'auto', overflow: 'auto' }}
              >
                <Card.Body>
                  <Card.Title className='text-sm'>{title}</Card.Title>
                  <Card.Subtitle>Created: {created_at}</Card.Subtitle>
                  <Card.Subtitle className='mt-1 mb-1'>
                    Due: {due_date}
                  </Card.Subtitle>

                  <Card.Subtitle>
                    Finished: {completed ? 'Yes' : 'No'}
                  </Card.Subtitle>
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  );
};

export default TaskShow;
