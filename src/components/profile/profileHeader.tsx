import React from "react";

interface ProfileHeaderProps {
  photoUrl: string;
  name: string;
  age: number;
  birthPlace: string;
  flagUrl: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  photoUrl,
  name,
  age,
  birthPlace,
  flagUrl,
}) => (
  <div className="md:w-1/2">
    <div className="relative h-[28rem] md:h-[32rem]">
      <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          {name}
        </h1>
        <div className="flex items-center text-white">
          <span className="text-xl md:text-2xl mr-4">Age: {age}</span>
          <span className="text-lg md:text-xl flex items-center">
            From: {birthPlace}
            <img
              src={flagUrl}
              alt={`${birthPlace} flag`}
              className="inline-block ml-2"
              style={{
                width: birthPlace.toLowerCase() === "corsica" ? "1em" : "16px",
                height: birthPlace.toLowerCase() === "corsica" ? "1em" : "12px",
              }}
            />
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileHeader;
