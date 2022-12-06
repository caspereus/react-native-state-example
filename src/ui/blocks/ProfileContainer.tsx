import { Box, Button, Heading, Text } from 'native-base';
import React from 'react';
import { useUserStore } from '../../modules/user/store';
import shallow from 'zustand/shallow'

const ProfileContainer = () => {
  const { name, isActive } = useUserStore(
    ({ state }) => ({ name: state.name, isActive: state.isActive }),
    shallow,
  );

  console.log("ProfileContainer render");

  return (
    <Box
      marginY="16px"
      padding="16px"
      borderRadius="lg"
      bgColor="orange.500">
      <Heading color="white">
        ID Card
      </Heading>
      <Text
        fontSize="lg"
        color="white">{name}
      </Text>
      <Text
        fontSize="sm"
        color="white">{isActive ? "Online" : "Offline"}
      </Text>
    </Box>
  )
}

export { ProfileContainer }