import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
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
            <Alert
              status="error"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                {message}
              </AlertTitle>
              <AlertDialogFooter alignSelf="center" pt={3}>
                <Button ref={cancelRef} onClick={() => onDelete(false)}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={() => onDelete(true)} ml={3}>
                  OK
                </Button>
              </AlertDialogFooter>
            </Alert>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default AlertBox;
