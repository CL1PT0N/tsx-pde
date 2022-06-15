import { Container, Heading } from '@chakra-ui/react';

import ActiveUsersItems from './ActiveUsersItems';

import ActCourses from '../../../testing/test course.json';
import OnlineUsers from '../../../testing/siswa online.json';

export default function SideSection() {
  const courseActivity = ActCourses;
  const onlineUsers = OnlineUsers;

  return (
    <Container pos="sticky" bottom={40} top={40} w="70%" my={10} maxH="100vh">
      <Heading fontSize={22} fontWeight={600} my={10}>
        Pengguna Online
      </Heading>
      {onlineUsers.slice(0, 5).map((item, index) => (
        <ActiveUsersItems {...item} key={index} />
      ))}
    </Container>
  );
}
