import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NaviBar = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventdefault;
    localStorage.clear();
    history.push('/');
    window.location.reload(false);
  };

  const handleClick = (path, e) => {
    history.push(path);
  };
  return (
    <Navbar bg='light' expand='lg'>
      <Button
        type='button'
        className='mr-2'
        variant='secondary'
        size='sm'
        onClick={(e) => {
          handleClick('/');
        }}
      >
        Tasks List
      </Button>
      <Button
        type='button'
        className=''
        variant='secondary'
        size='sm'
        onClick={(e) => {
          handleClick('/create');
        }}
      >
        Create New Task
      </Button>
    </Navbar>
  );
};

export default NaviBar;
