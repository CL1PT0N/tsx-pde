import { Grid, GridItem, Container } from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar/Sidebar';
import CourseSection from './sections/CourseSection';
import SideSection from './sections/SideSection';

export default function Beranda() {
  return (
    <Container maxW="100%" p={0} gridTemplateRows="repeat(3, 1fr)">
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colSpan={2}>
          <CourseSection />
        </GridItem>
        <GridItem>
          <SideSection />
        </GridItem>
      </Grid>
    </Container>
  );
}
