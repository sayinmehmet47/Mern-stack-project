import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
} from 'reactstrap';

export const RegisterModal = (props) => {
  const { buttonLabel, className } = props;
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Create user object
    const user = {
      name,
      email,
      password,
    };

    // Attempt to login
    dispatch(user);
  };
  return (
    <div>
      <NavLink onClick={toggle} href="#">
        Register
      </NavLink>{' '}
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        unmountOnClose={unmountOnClose}
      >
        <ModalHeader toggle={toggle}>Registration</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleOnSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={handleChangeName}
              />

              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={handleChangeEmail}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={handleChangePassword}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="dark" style={{ marginTop: '2rem' }} block>
            Register
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
