import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
function AlertBox(props: any) {
  const { setIsOpen, isOpen, message, url, fetchData } = props;
  const onClose = () => {
    setIsOpen(false);
  };

  let onDelete = async (status: any) => {
    if (status) {
      let data: any = await axios.delete(url);
      if (data.status == 200) {
        fetchData();
      } else {
        console.log(data.message);
      }
    }
    setIsOpen(false);
  };
  const cancelRef: any = React.useRef();
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody
              fontSize="20px"
              fontWeight="bold"
              textAlign="center"
              pt={10}
              pb={5}
            >
              {message}
            </AlertDialogBody>

            <AlertDialogFooter alignSelf="center">
              <Button ref={cancelRef} onClick={() => onDelete(false)}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={() => onDelete(true)} ml={3}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default AlertBox;
