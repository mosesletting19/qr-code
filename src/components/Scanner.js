import React, { useEffect, useRef, useState } from 'react';

const Scanner = () => {
  const [scanning, setScanning] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && !scanning) {
      // Initialize scanner logic
      console.log('Starting scanner...');
      setScanning(true);
    }

    return () => {
      console.log('Stopping scanner...');
      setScanning(false);
    };
  }, [scanning]);

  return (
    <div>
      <h1>Scanner</h1>
      <video ref={videoRef} style={{ width: '100%' }}></video>
      {!scanning && <p>Loading camera...</p>}
    </div>
  );
};

export default Scanner;
