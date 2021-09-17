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
} from 'reactstrap';
import { addItems } from '../Store/Actions/itemActions';

export const ItemModal = (props) => {
  const { buttonLabel, className } = props;
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);
  const [input, setInput] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const add = () => {
    setModal(!modal);
    if (input) {
      dispatch(addItems({ name: input }));
    }
    setInput('');
  };

  const inputChange = (input) => {
    setInput(input);
  };

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button className="mb-3" color="danger" onClick={toggle}>
          Add new Person
        </Button>
      </Form>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        unmountOnClose={unmountOnClose}
      >
        <ModalHeader toggle={toggle}>Add a new person</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            onChange={(e) => inputChange(e.target.value)}
            placeholder="Add a new item"
            rows={5}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={add}>
            ADD
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
