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
  useToast,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import axios from 'axios';
import React from 'react';
function AlertBox(props: any) {
  const { setIsOpen, isOpen, message, url, fetchData, disable, setDisable } =
    props;
  const toast = useToast();

  const onClose = () => {
    setIsOpen(false);
  };

  let onDelete = async (status: any) => {
    if (status) {
      setDisable(true);
      let data: any = await axios.delete(url);
      if (data.status == 200) {
        Toast(data.data.message, 'success');
      } else {
        Toast(data.data.message, 'error');
      }
      fetchData();
    }
    setIsOpen(false);
  };
  const cancelRef: any = React.useRef();
  const Toast = (title: any, status: any) => {
    toast({
      title: title,
      status: status,
      position: 'top-right',
      duration: 3000,
      isClosable: true,
    });
  };
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
              // status="error"
              bg="#fff"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="40px" mr={0} color="red.500" />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                {message}
              </AlertTitle>
              <AlertDialogFooter alignSelf="center" pt={3}>
                <Button ref={cancelRef} onClick={() => onDelete(false)}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  disabled={disable}
                  onClick={() => onDelete(true)}
                  ml={3}
                >
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
