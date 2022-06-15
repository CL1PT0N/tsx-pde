import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Icon,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FileText } from 'react-feather';
import { useLocation } from 'react-router-dom';
import PengajuanItem from './PengajuanItem';

export default function PengajuanAccordion() {
  const location = useLocation();
  const active = location.pathname.split('/')[2] == 'pengajuan';

  return (
    <Accordion allowMultiple my={1}>
      <AccordionItem border="0">
        <AccordionButton
          borderRadius="22px"
          py={3}
          _hover={active ? {bg:'red_darker'} : undefined}
          bg={active ? 'red_lighter' : undefined}
          color={active ? 'white' : undefined}
          _expanded={active ? { bg: 'red_lighter', color: 'white' } : undefined}
        >
          <Box flex="1" textAlign="left" fontWeight={500}>
            <Icon as={FileText} mr="5%" />
            Pengajuan
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} transitionDuration="0">
          <PengajuanItem
            title={'Tamu Guru'}
            path={'/main/pengajuan/tamuguru'}
          />
          <PengajuanItem
            title={'Magang Guru/Siswa'}
            path={'/main/pengajuan/magang'}
          />
          <PengajuanItem
            title={'Kunjungan Industri'}
            path={'/main/pengajuan/kunjungan'}
          />
          <PengajuanItem
            title={'Sertifikasi online'}
            path={'/main/pengajuan/sertifikasi'}
          />
          <PengajuanItem
            title={'Bursa kerja'}
            path={'/main/pengajuan/bursakerja'}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
