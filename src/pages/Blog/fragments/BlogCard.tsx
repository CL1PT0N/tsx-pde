import {
  Box,
  GridItem,
  HStack,
  Text,
  Image,
  Icon,
  useDisclosure,
  VStack,
  Skeleton,
} from '@chakra-ui/react';

import React from 'react';
import BlogModal from './BlogModal';
import BlogUser from './BlogUser';
import BlogStats from './BlogStats';

type BlogCardType = {
  user: {
    name: string;
    profile_icon: string;
  };
  post_image: string;
  post_body: string;
  date: number;
  likes: number;
  comments: number;
  share: number;
};

export default function BlogCard({
  user,
  post_image,
  post_body,
  date,
  likes,
  comments,
  share,
}: BlogCardType) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <GridItem colSpan={1}>
      <BlogModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        {...blogProps}
      />
      <Box  bgColor="white"  borderRadius="3xl">
        <BlogUser name={user.name} icon="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" date={date} />
        <Box
          
          justifyContent="center"
          display="flex"
          h="450px"
          // bg="#EEEEEE"
          // _hover={{ bg: '#E7E7E7' }}
          cursor="pointer"
          transition="200ms"
          onClick={onOpen}
          bg={`url(${post_image})`}
          // css={{
          //   backgroundImage:`url(${post_image})`,
          //   filter:'blur(2px)'
          // }}
        >
          <Box
            display="flex"
            w="100%"
            h="100%"
            backdropFilter="auto"
            backdropBlur="10px"
            alignItems="center"
            justifyContent="center"
          >
            
            
            <Image
              maxW="100%"
              maxH="450px"
              src={post_image}
              objectFit="contain"
            />
          </Box>
        </Box>
        <Text px={6} my={4} noOfLines={2} overflow="hidden">
          <strong>{user.name} </strong>
          {post_body}
        </Text>
        <Box px={4} py={6}>
          <BlogStats {...blogProps} />
        </Box>
      </Box>
    </GridItem>
  );
}
