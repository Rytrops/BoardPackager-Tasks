import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Task = ({ props, id }) => {
  const { title, description, due_date, completed, created_at, overdue } =
    props;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/tasks/${id}`);
  };

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
    <Col className='mt-1 mb-1'>
      <Card
        border={color()}
        onClick={handleClick}
        style={{ width: '14rem', height: '14rem', overflow: 'auto' }}
      >
        <Card.Body>
          <Card.Title className='text-sm'>{title}</Card.Title>
          <Card.Subtitle>Created: {created_at}</Card.Subtitle>
          <Card.Subtitle className='mt-1 mb-1'>Due: {due_date}</Card.Subtitle>

          <Card.Subtitle>Finished: {completed ? 'Yes' : 'No'}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Task;
