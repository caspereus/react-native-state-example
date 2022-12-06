import { Box, Text, Button, FlatList, VStack } from 'native-base';
import React from 'react';
import { OnlineStatusContainer, ProfileContainer, StatusToogler } from '../ui/blocks';

const ProfileExample = () => {
  return (
    <VStack padding="16px" space="16px">
      <ProfileContainer />
      <OnlineStatusContainer />
      <StatusToogler />
    </VStack>
  )
}

export { ProfileExample }