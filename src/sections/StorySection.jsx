// src/sections/StorySection.jsx

import SectionContainer from "../components/common/SectionContainer";
import Title from "../components/common/Title";

import TimelineCard from "../components/timeline/TimelineCard";
import TimelineLine from "../components/timeline/TimelineLine";

import { timeline } from "../data/timeline";

function StorySection() {
  return (
    <SectionContainer id="story">
      <div className="w-full">
        <Title>Our Story ❤️</Title>

        <p className="text-center text-gray-700 mb-10 px-4">
          A journey through some special moments.
        </p>

        <div className="space-y-4 relative">
          {timeline.map((item, index) => (
            <div key={item.id}>
              <div
                className={`flex ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <TimelineCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  index={index}
                />
              </div>

              {index !== timeline.length - 1 && (
                <TimelineLine />
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default StorySection;