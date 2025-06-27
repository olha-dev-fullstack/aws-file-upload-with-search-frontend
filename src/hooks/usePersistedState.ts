import { getItem, setItem } from "@/lib/utils";
import { useState, useEffect } from "react";

function usePersistedState(key: string, initialValue: string) {
  const [state, setState] = useState<string>(getItem(key) ?? initialValue);

  useEffect(() => {
    setItem(key, state);
  }, [key, state]);

  return [state, setState] as const;
}

export default usePersistedState;
