import React, { useEffect, useState } from "react";
import Footer from "../footer";
import Banner from "../banner";
import ProfileCard from "./profileCard";

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

const Homepage: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    fetch("/src/assets/db.json")
      .then((response) => response.json())
      .then((data) => setProfiles(data.profiles))
      .catch((error) => console.error("Error fetching profiles:", error));
  }, []);

  const teamProfiles = {
    fullstack: profiles.filter((profile) => profile.team === "fullstack"),
    frontend: profiles.filter((profile) => profile.team === "frontend"),
    backend: profiles.filter((profile) => profile.team === "backend"),
  };

  const renderTeamSection = (title: string, teamProfiles: Profile[]) => (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-orange-800">
        {title} Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
        {teamProfiles.map((profile) => (
          <ProfileCard key={profile.id} person={profile} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-orange-100 to-orange-200">
      <Banner />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-orange-800">
          Our Programming Squad
        </h1>
        {renderTeamSection("Fullstack", teamProfiles.fullstack)}
        {renderTeamSection("Front-end", teamProfiles.frontend)}
        {renderTeamSection("Back-end", teamProfiles.backend)}
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
