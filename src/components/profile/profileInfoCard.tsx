import React from "react";

interface ProfileInfoCardProps {
  title: string;
  content: string | React.ReactNode;
  overflow?: boolean;
}

const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({
  title,
  content,
  overflow = false,
}) => (
  <div className={`bg-orange-50 p-6 rounded-md `} style={{ maxHeight: "7em" }}>
    <h2 className="text-2xl font-semibold mb-3 text-orange-800 ">{title}</h2>
    {typeof content === "string" ? (
      <p
        className="text-base font-medium text-orange-600"
        style={overflow ? { maxHeight: "5em", overflow: "auto" } : {}}
      >
        {content}
      </p>
    ) : (
      content
    )}
  </div>
);

export default ProfileInfoCard;
