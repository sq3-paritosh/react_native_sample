import React from 'react';
import {LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';
import DefaultLayout from '../../layouts/defaultLayout';
import {Button} from 'react-native';

const LearnMore = (): JSX.Element => {
  return (
    <DefaultLayout>
      <LearnMoreLinks />
      <Button title="Go back" />
    </DefaultLayout>
  );
};

export default LearnMore;
