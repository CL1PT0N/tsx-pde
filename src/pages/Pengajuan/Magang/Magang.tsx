import { Progress } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { fetchIntern } from './fragments/apihandler';
import Tables from './fragments/Tables';

export default function Magang() {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    await fetchIntern()
      .then((data) => {
        setInterns(data);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    return <Progress colorScheme="purple" isIndeterminate size="xs" />;
  } else {
    return <Tables interns={interns} reload={fetchApi} />;
  }
}
