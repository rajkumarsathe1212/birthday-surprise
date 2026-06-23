// src/components/common/Modal.jsx

import { AnimatePresence, motion } from "framer-motion";

function Modal({
  isOpen,
  onClose,
  children,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="
              fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-50
              w-[90%]
              max-w-lg
            "
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Modal;