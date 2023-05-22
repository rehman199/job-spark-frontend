import { useState } from "react";

export const useLoading = (initialValue?: boolean) => {
  const [loading, setLoading] = useState<boolean>(initialValue ?? false);
  return {
    loading,
    setLoading,
  };
};
