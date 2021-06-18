import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react"

import React from 'react'

function CustomModal(props: any) {
  const {isOpen, onClose} =  props;
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi accusantium, voluptatibus doloremque minus ut amet praesentium? Eaque blanditiis expedita sint, odit molestiae architecto aspernatur eum, nihil exercitationem rem consequatur! Voluptates.
            </ModalBody>
  
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue">Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default CustomModal
