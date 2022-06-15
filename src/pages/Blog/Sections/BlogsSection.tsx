import React, { useEffect, useState } from 'react';
import BlogCard from '../fragments/BlogCard';
import Posts from '../../../testing/Uploads.json';
import { ANIM_TRANSITION } from '../../../utils/constants';
import { motion } from 'framer-motion';
import { Grid, Progress } from '@chakra-ui/react';

export default function BlogsSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Progress size="xs" isIndeterminate colorScheme='red' />;
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
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {Posts.map((item, index) => (
            <BlogCard {...item} key={index} />
          ))}
        </Grid>
      </motion.div>
    );
  }
}
