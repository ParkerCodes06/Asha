import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ToastContextType {
  showToast: (message: string, type?: Toast['type']) => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [counter, setCounter] = useState(0);

  const showToast = useCallback((message: string, type: Toast['type'] = 'success') => {
    const id = counter + 1;
    setCounter(id);
    setToasts((prev) => [...prev, { id, message, type }]);
  }, [counter]);

  useEffect(() => {
    if (toasts.length === 0) return;
    const timer = setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);
    return () => clearTimeout(timer);
  }, [toasts]);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getBgColor = (type: Toast['type']) => {
    switch (type) {
      case 'success': return 'linear-gradient(135deg, #4CAF50, #66BB6A)';
      case 'error': return 'linear-gradient(135deg, #f44336, #ef5350)';
      case 'info': return 'linear-gradient(135deg, #2196F3, #42A5F5)';
    }
  };

  const getIcon = (type: Toast['type']) => {
    switch (type) {
      case 'success': return '\u2713';
      case 'error': return '\u2717';
      case 'info': return 'i';
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div style={{
        position: 'fixed',
        bottom: 90,
        left: 16,
        right: 16,
        zIndex: 10002,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        pointerEvents: 'none',
      }}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            onClick={() => removeToast(toast.id)}
            className="toast-enter"
            style={{
              background: getBgColor(toast.type),
              color: '#fff',
              padding: '14px 18px',
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
              pointerEvents: 'auto',
              cursor: 'pointer',
            }}
          >
            <div style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              fontWeight: 700,
              flexShrink: 0,
            }}>
              {getIcon(toast.type)}
            </div>
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
