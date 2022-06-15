import { Progress } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { fetchCourses } from './api/apihandler';
import CourseCard from './fragments/CourseCard';
import { motion } from 'framer-motion';
import { ANIM_TRANSITION } from '../../utils/constants';

export default function Loader() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    await fetchCourses()
      .then((data) => {
        setClasses(data);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchApi();
  }, []);
  if (loading) {
    return (
      <>
        <Progress colorScheme="green" isIndeterminate size="xs" />
        <Progress colorScheme="green" isIndeterminate size="xs" />
      </>
    );
  } else {
    return (
      <>
        {classes.map((currClass, index) => (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            transition={{ delayChildren: 1 }}
            animate={{
              y: 0,
              opacity: 1,
              ...ANIM_TRANSITION,
            }}
            exit={{ y: 300, opacity: 0, ...ANIM_TRANSITION }}
            style={{ width: '100%' }}
          >
            <CourseCard key={index} {...currClass} />
          </motion.div>
        ))}
      </>
    );
  }
}
