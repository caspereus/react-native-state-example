import { Box, Text } from 'native-base';
import React from 'react';
import { useUserStore } from '../../modules/user/store';
import shallow from 'zustand/shallow';

const OnlineStatusContainer = () => {
  const isActive = useUserStore(({ state }) => state.isActive, shallow);

  console.log("OnlineStatusContainer render");

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      borderRadius="md"
      height="45px"
      backgroundColor={isActive ? "green.500" : "red.500"}>
      <Text color="white" fontWeight="bold">
        {isActive ? "Online" : "Offline"}
      </Text>
    </Box>
  );
}

export { OnlineStatusContainer }