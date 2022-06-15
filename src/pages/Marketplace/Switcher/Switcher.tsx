import { Progress } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/apihandler';
import AddSection from '../Sections/AddSection';
import ListSection from '../Sections/ListSection';
import { motion } from 'framer-motion';
import { ANIM_TRANSITION } from '../../../utils/constants';

export default function Switcher({ value, search }: any) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [permData, setPerm] = useState([]);

  const fetchData = async () => {
    setProducts([]);
    const res = await fetchProducts()
      .then((data) => {
        setProducts(data);
        setPerm(data);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // console.log(search)
    if (search === '') setProducts(permData);
    setProducts(() =>
      permData.filter((item: any) =>
        item.name.toLowerCase().match(search.toLowerCase())
      )
    );
  }, [search]);

  const renderedEl = () => {
    switch (value) {
      case 'add':
        return <AddSection data={products} reload={fetchData} />;
      case 'list':
        return <ListSection data={products} reload={fetchData} />;
    }
  };

  if (loading) {
    return (
      <Progress colorScheme="red" isIndeterminate size="xs" h={1} w="full" />
    );
  } else {
    return (
      <AnimatePresence>
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
          {renderedEl()}
        </motion.div>
      </AnimatePresence>
    );
  }
}
