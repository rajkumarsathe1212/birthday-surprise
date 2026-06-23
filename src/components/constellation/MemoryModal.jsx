// src/components/constellation/MemoryModal.jsx

import Modal from "../common/Modal";
import GlassCard from "../common/GlassCard";

function MemoryModal({
  isOpen,
  onClose,
  memory,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <GlassCard>
        <div className="text-center">

          <h2
            className="
              text-2xl
              font-bold
              text-pink-700
              mb-4
            "
          >
            {memory?.title}
          </h2>

          <p
            className="
              text-slate-700
              leading-relaxed
            "
          >
            {memory?.text}
          </p>

          <button
            onClick={onClose}
            className="
              mt-6

              px-5
              py-2

              rounded-full

              bg-pink-500

              text-white
            "
          >
            Close ❤️
          </button>

        </div>
      </GlassCard>
    </Modal>
  );
}

export default MemoryModal;