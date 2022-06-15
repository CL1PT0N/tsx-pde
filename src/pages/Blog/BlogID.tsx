import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function BlogID() {
  const params = useParams();

  return (
    <Sidebar>
      <div>{params.id}</div>
    </Sidebar>
  );
}
