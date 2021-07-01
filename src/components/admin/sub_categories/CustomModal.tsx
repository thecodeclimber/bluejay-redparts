import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import React, { useState } from 'react';

function CustomModal(props: any) {
  const {
    isOpen,
    onClose,
    Edit,
    editHandle,
    productData,
    setProductData,
    fetchData,
  } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Edit ? 'Edit' : 'Create'} Product</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
