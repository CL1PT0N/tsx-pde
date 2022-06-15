import { Progress } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { fetchCerts } from './fragments/apihandler';
import Tables from './fragments/Tables';

export default function Sertifikasi() {
  const [cert, setCert] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    await fetchCerts()
      .then((data) => {
        setCert(data);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    return <Progress colorScheme="blue" isIndeterminate size="xs" />;
  } else {
    return <Tables certs={cert} reload={fetchApi} />
  }
}
