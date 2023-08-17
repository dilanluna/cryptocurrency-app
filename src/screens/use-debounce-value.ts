import { useEffect, useState } from 'react';

export default function useDebouncedValue<T>(value: T): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return debouncedValue;
}
