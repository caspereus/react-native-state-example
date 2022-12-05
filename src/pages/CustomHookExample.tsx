import { Box, Divider, Flex, Heading, Text } from 'native-base';
import React from 'react';
import { useConnection } from '../modules/connection/hooks';

const CustomHookExample = () => {
  const { isConnected, connectionType } = useConnection();

  return (
    <Flex width="full" padding="16px">
      <Box
        width="100%"
        padding="16px"
        borderRadius="md"
        backgroundColor="black">
        <Heading color="white">
          {isConnected ? 'Connection Status' : 'Checking Connection Status'}
        </Heading>
        {isConnected && (
          <>
            <Divider marginY="8px" />
            <Text color="white">Status : {isConnected ? 'Connected' : 'Disconnected'}</Text>
            <Text color="white">Type : {connectionType}</Text>
          </>
        )}
      </Box>
    </Flex>
  )
}

export { CustomHookExample };