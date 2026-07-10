import { useState, useEffect } from 'react';
import { useNetworkStatus } from '../hooks/useNetworkStatus';

export default function OfflineBanner() {
  const isOnline = useNetworkStatus();
  const [show, setShow] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setShow(true);
      setWasOffline(true);
    } else if (wasOffline) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setWasOffline(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  if (!show) return null;

  return (
    <div
      className={isOnline ? 'toast-enter' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10003,
        background: isOnline
          ? 'linear-gradient(135deg, #4CAF50, #66BB6A)'
          : 'linear-gradient(135deg, #f44336, #ef5350)',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 16px',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 13,
        fontWeight: 600,
        paddingBottom: 'calc(10px + env(safe-area-inset-top, 0px))',
      }}
    >
      {isOnline ? '\u2713 Back Online' : '\u26A0 No Internet Connection'}
    </div>
  );
}
