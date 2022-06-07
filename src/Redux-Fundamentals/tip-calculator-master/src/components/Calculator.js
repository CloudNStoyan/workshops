import { Card } from '@twilio-paste/core';
import { MenuItemContainer } from '../containers/MenuItemsContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { Summary } from './Summary';

const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemContainer />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;
