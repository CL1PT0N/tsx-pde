import { Progress } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { fetchJobs } from './fragments/apihandler';
import Wrapper from './fragments/Tables';

export default function BursaKerja() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    // setLoading(true);
    await fetchJobs()
      .then((data) => {
        setJobs(data);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    return <Progress colorScheme="green" isIndeterminate size="xs" />;
  } else {
    return <Wrapper jobs={jobs} reload={fetchApi} />;
  }
}
