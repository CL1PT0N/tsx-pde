import { Progress } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react'
import { fetchInd } from './fragments/apihandler';
import Tables from './fragments/Tables';

export default function Kunjungan() {
  const [ind, setInd] = useState([]);
  const[ loading, setLoading] = useState(true)
  const fetchApi = async () => {
    await fetchInd()
    .then((data) => {
      setInd(data)
    })
    .then(() => setLoading(false))
  }
  
  useEffect(() => {
    fetchApi();
  }, []);

  if(loading){
    return <Progress colorScheme="pink" isIndeterminate size='xs'/>;

  } else{
    return <Tables inds={ind} reload={fetchApi}/>
  }
}
