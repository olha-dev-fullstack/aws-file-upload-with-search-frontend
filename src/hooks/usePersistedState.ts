import { getItem, setItem } from "@/lib/utils";
import { useState, useEffect } from "react";

function usePersistedState<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(() => {
    return getItem(key) ?? initialValue;
  });

  useEffect(() => {
    setItem(key, state);
  }, [key, state]);

  return [state, setState] as const;
}

export default usePersistedState;
