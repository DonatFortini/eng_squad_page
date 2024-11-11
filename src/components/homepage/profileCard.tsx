import React from "react";
import { Link } from "react-router-dom";

interface Profile {
  id: number;
  name: string;
  age: number;
  photoUrl: string;
  birth_date: string;
  birth_place: string;
  strengths: string[];
  weaknesses: string[];
  fun_fact: string;
  description: string;
  team: "fullstack" | "frontend" | "backend";
}

interface ProfileCardProps {
  person: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ person }) => {
  return (
    <Link to={`/profile/${person.id}`} className="block no-underline">
      <div className="profile-card w-64 h-96 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl hover:scale-105">
        <div className="relative h-[70%]">
          <img
            src={"/" + person.photoUrl}
            alt={`${person.name}'s photo`}
            className="w-full h-full object-cover transition-transform duration-50 transform hover:scale-90"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-50"></div>
        </div>
        <div className="h-[30%] p-4 text-white">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold truncate">{person.name}</h2>
            <span className="text-xl font-semibold">{person.age}</span>
          </div>
          <p className="text-sm font-medium truncate">{person.strengths[0]}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
