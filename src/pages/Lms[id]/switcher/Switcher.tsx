import { AnimatePresence } from 'framer-motion';
import React from 'react';
import ActivityCard from '../fragments/ActivityCard';
import Members from '../fragments/Members';

export default function Switcher({ stateValue, props }: any) {
  const renderedEl = () => {
    switch (stateValue) {
      case 'aktivitas':
        return <ActivityCard props={props} key='aktivitas'/>;
      case 'peserta':
        return <Members key='peserta'/>;
    }
  };

  return <AnimatePresence exitBeforeEnter>{renderedEl()}</AnimatePresence>;
}
