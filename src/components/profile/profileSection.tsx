import React from "react";

interface ProfileSectionProps {
  title: string;
  items: string[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, items }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-3 text-orange-800">{title}</h2>
    {items.length > 0 ? (
      <ul className="list-disc list-inside text-gray-700 text-md">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-700 text-md">None listed</p>
    )}
  </div>
);

export default ProfileSection;
