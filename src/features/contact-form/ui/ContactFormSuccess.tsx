import { CloseIcon } from "@/shared/ui/icons/close/close";

import styles from "./ContactForm.module.scss";

export const ContactFormSuccess = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.contactFormSuccess}>
      <h2>
        Thanks for reaching out to join The Clicksly! We’ve received your
        request and will review it shortly. Stay tuned! 
      </h2>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
};
