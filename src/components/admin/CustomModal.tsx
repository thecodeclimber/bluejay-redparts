import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import AddForm from './AddForm';
import EditForm from './EditForm';

function CustomModal(props: any) {
  const {
    isOpen,
    onClose,
    Edit,
    editHandle,
    productData,
    setProductData,
    fetchData,
    form,
    setForm,
    disable,
  } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Edit ? 'Edit' : 'Create'} Product</ModalHeader>
          <ModalCloseButton />
          {Edit ? (
            <EditForm
              productData={productData}
              setProductData={setProductData}
              editHandle={editHandle}
              isOpen={isOpen}
              onClose={onClose}
              disable={disable}
            />
          ) : (
            <AddForm
              isOpen={isOpen}
              form={form}
              setForm={setForm}
              onClose={onClose}
              fetchData={fetchData}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
