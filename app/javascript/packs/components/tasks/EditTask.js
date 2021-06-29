import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  Form,
  Alert,
  ButtonGroup,
} from 'react-bootstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { useHistory, useParams } from 'react-router-dom';

const EditTask = ({ task, id }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);
  const [dueDate, setDueDate] = useState(task.due_date);
  const [errorMessage, setErrorMessage] = useState({});

  const handleDateChange = (date) => {
    let dateTime = date.format();
    setDueDate(dateTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/v1/tasks/${id}`, {
        task: {
          title,
          description,
          due_date: dueDate,
          completed,
        },
      })
      .then((resp) => {
        setErrorMessage(resp.data);
        window.location.reload();
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`/api/v1/tasks/${id}`);
  };

  return (
    <Col className='pt-5'>
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
      <Card className='bg-muted '>
        <Card.Title className='text-center'>Edit Task</Card.Title>
        <Form onSubmit={handleSubmit} className='text-center bd-danger'>
          <Form.Group className='px-3' size='lg' controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              autoFocus
              type='title'
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='px-3' size='lg' controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='px-3' size='lg' controlId='dueDate'>
            <Form.Label>Due Date</Form.Label>
            <Datetime
              utc={true}
              onChange={handleDateChange}
              initialValue={dueDate}
            />
          </Form.Group>

          <Form.Group className='px-3' size='lg' controlId='completed'>
            <Form.Label>Completed:</Form.Label>
            <ButtonGroup aria-label='Basic example'>
              <Button
                variant='success'
                size='sm'
                className='ml-1'
                onClick={(e) => {
                  setCompleted(true);
                }}
              >
                Yes
              </Button>
              <Button
                variant='danger'
                size='sm'
                className='ml-1'
                onClick={(e) => {
                  setCompleted(false);
                }}
              >
                No
              </Button>
            </ButtonGroup>
          </Form.Group>

          <Button variant='dark' block size='lg' type='submit'>
            Edit Task
          </Button>
          <Button
            variant='danger'
            block
            size='lg'
            type='click'
            onClick={(e) => {
              handleDelete(e);
            }}
          >
            Delete Task
          </Button>
        </Form>
      </Card>
    </Col>
  );
};

export default EditTask;
