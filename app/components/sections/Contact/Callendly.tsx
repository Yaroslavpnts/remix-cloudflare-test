import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

const Callendly = ({ open, onClose }: { open: boolean; onClose: Function }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <PopupModal
      url="https://calendly.com/yevhen-piotrovskyi-yojji"
      rootElement={document?.body}
      onModalClose={() => onClose((s) => !s)}
      open={open}
    />
  ) : null;
};

export default Callendly;
