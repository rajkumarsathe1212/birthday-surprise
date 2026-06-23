// src/components/constellation/ConstellationMap.jsx

import MemoryStar from "./MemoryStar";

function ConstellationMap({
  memories,
  onSelect,
}) {
  return (
    <div
      className="
        relative
        w-full
        h-[420px]
      "
    >
      {/* constellation lines */}
      <svg
        className="
          absolute
          inset-0
          w-full
          h-full
          pointer-events-none
        "
      >
        <line
          x1="20%"
          y1="22%"
          x2="68%"
          y2="18%"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
        />

        <line
          x1="68%"
          y1="18%"
          x2="45%"
          y2="48%"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
        />

        <line
          x1="45%"
          y1="48%"
          x2="72%"
          y2="72%"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
        />

        <line
          x1="45%"
          y1="48%"
          x2="22%"
          y2="76%"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
        />
      </svg>

      {memories.map((memory) => (
        <div
          key={memory.id}
          className="absolute"
          style={{
            left: memory.left,
            top: memory.top,
          }}
        >
          <MemoryStar
            onClick={() => onSelect(memory)}
          />
        </div>
      ))}
    </div>
  );
}

export default ConstellationMap;