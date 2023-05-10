import React from 'react';
import {LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';
import DefaultLayout from '../../layouts/defaultLayout';

const LearnMore = (): JSX.Element => {
  return (
    <DefaultLayout>
      <LearnMoreLinks />
    </DefaultLayout>
  );
};

export default LearnMore;
