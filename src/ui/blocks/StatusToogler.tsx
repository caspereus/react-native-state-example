import { HStack, Switch, Text } from 'native-base';
import React from 'react';
import { useUserStore } from '../../modules/user/store';

const StatusToogler = () => {
  const store = useUserStore();

  return (
    <HStack
      alignItems="center"
      space={4}>
      <Text>Switch Online Status :</Text>
      <Switch
        size="sm"
        isChecked={store.state.isActive}
        onToggle={store.toogleActiveStatus} />
    </HStack>
  );
}

export { StatusToogler };