import React from "react";

const MansoryLayoutNew = () => {
  const cards = [
    {
      caption: "Current active users",
      number: "500K+",
      videoSrc:
        "https://cdn.guildfi.com/video/upload/v1755844035/zentry/F1_Updated.mp4",
    },
    {
      caption: "Special zAI Parameters",
      number: "24B+",
      videoSrc:
        "https://cdn.guildfi.com/video/upload/v1750333838/datahub/78mf2Psna26EXFkHOhsnruHdg.mp4",
    },
    {
      caption: "Data Process for AI-ready",
      number: "970GB+",
    },
    {
      caption: "Treasury",
      number: "100M+",
      videoSrc: "/export/videos/alpha/bento/card-5@lg.webm",
    },
    {
      caption: "World-Class Backers",
      description: `coinbase ventures, yzi labs, spartan, longhash, pantera capital, animoca brands, defiance capital, play ventures, skyvision capital, vessel capital, arche fund, synergis`,
    },
    {
      caption: "Value distributed",
      number: "$20M+",
      description: "More to be added",
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bentoCard bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <div className="bentoCard__border border border-gray-200 rounded-lg"></div>
            <p className="bentoCard__caption text-gray-700 text-center font-semibold p-4">
              {card.caption}
            </p>
            {card.number && (
              <div className="bentoCard__number text-center text-2xl font-bold text-green-500">
                {card.number}
              </div>
            )}
            {card.videoSrc && (
              <video
                className="bentoCard__video w-full rounded-b-lg"
                playsInline
                loop
                preload="auto"
                poster=""
                src={card.videoSrc}
              ></video>
            )}
            {card.description && (
              <div className="p-4 text-sm text-gray-500">
                {card.description.split(", ").map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MansoryLayoutNew;
