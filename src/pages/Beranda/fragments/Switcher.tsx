import { AnimatePresence } from 'framer-motion';
import React from 'react';
import ActiveSection from '../sections/CoursePages.tsx/ActiveSection';
import DefaultSection from '../sections/CoursePages.tsx/DefaultSection';
import FinishedSection from '../sections/CoursePages.tsx/FinishedSection';

export default function Switcher({ value }: { value: string }) {
  //kalau dari database sudab di beri value seperti active, selesai, dan lain lain tidak usah
  //memakai switcher ini, hanya perlu filter data response api saja.
  const renderedEl = () => {
    switch (value) {
      case 'aktif':
        return <ActiveSection key={'aktif'}/>;
      case 'selesai':
        return <FinishedSection key={'selesai'}/>;
      default:
        return <DefaultSection key={'default'}/>;
    }
  };
  return <AnimatePresence exitBeforeEnter>{renderedEl()}</AnimatePresence>;
}
