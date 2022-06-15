import React, { useEffect, useState } from 'react';
import { Progress } from '@chakra-ui/react';
import { fetchGuests } from './fragments/apihandler';
import Tables from './fragments/Tables';

export default function TamuGuru() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    await fetchGuests()
      .then((data) => {
        setGuests(data);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    return <Progress colorScheme="red" isIndeterminate size="xs" />;
  } else {
    return <Tables guests={guests} reload={fetchApi} />;
  }
}
