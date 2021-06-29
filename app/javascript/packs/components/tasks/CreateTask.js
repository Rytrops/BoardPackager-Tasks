import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  Form,
  Alert,
} from 'react-bootstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { useHistory } from 'react-router-dom';
const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [dueDate, setDueDate] = useState('');
  const [errorMessage, setErrorMessage] = useState({});

  const history = useHistory();

  const handleDateChange = (date) => {
    let dateTime = date.format();
    setDueDate(dateTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/v1/tasks', {
        task: {
          title,
          description,
          due_date: dueDate,
          completed,
        },
      })
      .then((resp) => {
        setErrorMessage(resp.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  };

  const validateForm = () => {
    return title.length > 0 && description.length > 0 && dueDate != '';
  };

  return (
    <div className='bg-light h-100'>
      <Container>
        <div>
          {Object.keys(errorMessage).length > 0 &&
            Object.entries(errorMessage).map((parameter, error) => {
              return (
                <Alert
                  key={[parameter]}
                  variant='info'
                  className='text-center'
                  onClose={() => setErrorMessage('')}
                  dismissible
                >
                  {`${parameter}  ${error}`}
                </Alert>
              );
            })}
        </div>
        <Row className='mx-auto'>
          <Col className='col-4 mx-auto mt-5 h-100'>
            <Card className='bg-muted '>
              <Card.Title className='text-center'>Create New Task</Card.Title>
              <Form onSubmit={handleSubmit} className='text-center bd-danger'>
                <Form.Group className='px-3' size='lg' controlId='title'>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    autoFocus
                    type='title'
                    placeholder='Task Title'
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className='px-3' size='lg' controlId='description'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type='description'
                    placeholder='Task description'
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className='px-3' size='lg' controlId='completed'>
                  <Form.Label>Due Date</Form.Label>
                  <Datetime utc={true} onChange={handleDateChange} />
                </Form.Group>

                <Button
                  variant='dark'
                  size='lg'
                  type='submit'
                  disabled={!validateForm()}
                >
                  Create Task
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateTask;
