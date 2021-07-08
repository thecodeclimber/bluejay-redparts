import { useToast } from '@chakra-ui/react';
// export const showMessage = ({ title, status, description }: any) => {
//   console.log('toast');
//   const toast = useToast();
//   toast({
//     title: title,
//     status: status,
//     position: 'top-right',
//     duration: 3000,
//     isClosable: true,
//   });
// };
export const Toast = (title: any, status: any) => {
  const toast = useToast();
  toast({
    title: title,
    status: status,
    position: 'top-right',
    duration: 3000,
    isClosable: true,
  });
};
