import { useOutletContext } from "@remix-run/react";

export const useEnv = () => {
  const context = useOutletContext();
  return (context as any)?.env || {};
}
