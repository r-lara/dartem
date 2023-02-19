import { useEffect, useState } from 'react';


const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T | ((prevValue: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) as T : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((prevValue: T) => T)) => {
    try {
      const valueToStore: T = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

type ThemeModeType = boolean;

const useDarkMode = (): [ThemeModeType, (darkMode: ThemeModeType) => void] => {
  const [enabled, setEnabled] = useLocalStorage<ThemeModeType>('dark-theme', false);

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;
    enabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled]);

  return [enabled, setEnabled];
}

export default useDarkMode;
