import React, {useState, useEffect} from 'react';

type ConnectionResult = {
  isConnected?: boolean;
  connectionType?: string;
};

const useConnection = (): ConnectionResult => {
  const [isConnected, setConnected] = useState<boolean>();
  const [connectionType, setConnectionType] = useState<string>();

  const checkConnection = () => {
    // Logic Check Connection
    setTimeout(() => {
      setConnected(true);
      setConnectionType('wifi');
    }, 5000);
  };

  useEffect(() => checkConnection(), []);

  return {
    isConnected: isConnected,
    connectionType: connectionType,
  };
};

export {useConnection};
