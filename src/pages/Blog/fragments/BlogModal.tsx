import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  VStack,
  Image,
  Text,
  Box,
  Grid,
  GridItem,
  Container,
  Input,
  Spacer,
} from '@chakra-ui/react';
import BlogStats from './BlogStats';
import BlogUser from './BlogUser';
import CommentInput from './CommentInput';

type BlogModalType = {
  isOpen:any,
  onOpen:any,
  onClose:any,
  user: {
    name: string;
    profile_icon: string;
  };
  post_image: string;
  post_body: string;
  date: number;
  likes:number;
  comments:number;
  share:number;
};

export default function BlogModal({
  isOpen,
  onClose,
  user,
  post_image,
  post_body,
  date,
  likes,
  comments,
  share,
}: BlogModalType) {

  const blogProps = {
    user: user,
    post_image: post_image,
    post_body: post_body,
    date: date,
    likes: likes,
    comments: comments,
    share: share,
  };

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      blockScrollOnMount={false}
      motionPreset='scale'
    >
      <ModalOverlay />
      <ModalContent borderRadius={0} maxW="-webkit-fit-content">
        <ModalBody p={4}>
          <HStack maxW="60vw" h="100%" alignItems="stretch">
            <Image
              maxH="700px"
              maxW="35vw"
              src={post_image}
            />
            <VStack alignItems="start" justify="space-between" w="30rem">
              <Box>
                <BlogUser name={user.name} icon={user.profile_icon} date={date}/>
                <Text p={4}>{post_body}</Text>
              </Box>
              <Box w="full" px={4}>
                <BlogStats {...blogProps}/>
                <CommentInput />
              </Box>
            </VStack>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
