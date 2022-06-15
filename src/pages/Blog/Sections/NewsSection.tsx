import { ANIM_TRANSITION } from '../../../utils/constants';
import { motion } from 'framer-motion';
import { Grid, Progress } from '@chakra-ui/react';
import NewsCard from '../../LandingPage/fragments/NewsCard';
import News from '../../../testing/berita.json';
import { getDate } from '../../../utils/helpers/unixToString';
import { useEffect, useState } from 'react';

export default function NewsSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Progress size="xs" isIndeterminate colorScheme="red" />;
  } else {
    return (
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          ...ANIM_TRANSITION,
        }}
        style={{ width: '100%' }}
        exit={{ y: 300, opacity: 0, ...ANIM_TRANSITION }}
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          {News.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              date={getDate(item.date)}
              imageUrl={item.imageUrl}
            />
          ))}
        </Grid>
      </motion.div>
    );
  }
}
