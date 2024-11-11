import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Banner from "../banner";
import Footer from "../footer";
import ProfileHeader from "./profileHeader";
import ProfileInfoCard from "./profileInfoCard";
import ProfileSection from "./profileSection";

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

export default function Profile() {
  const [person, setPerson] = useState<Profile | null>(null);
  const { id } = useParams<{ id: string }>();
  const [flagUrl, setFlagUrl] = useState<string>("");

  useEffect(() => {
    fetch("/src/assets/db.json")
      .then((response) => response.json())
      .then((data) => {
        const profile = data.profiles.find(
          (p: Profile) => p.id === parseInt(id as string)
        );
        setPerson(profile);
        if (profile) {
          getFlagEmoji(profile.birth_place).then(setFlagUrl);
        }
      });
  }, [id]);

  async function getFlagEmoji(birth_place: string): Promise<string> {
    const birthPlaceArray = birth_place.split(",");
    if (
      birthPlaceArray[birthPlaceArray.length - 1].trim().toLowerCase() ===
      "corsica"
    ) {
      return "/src/assets/corsica.png";
    }

    const flagpath = await fetch("https://flagcdn.com/en/codes.json")
      .then((response) => response.json())
      .then((data) => {
        const obj = data as { [key: string]: string };
        const countryCode = Object.keys(obj).find(
          (key) =>
            obj[key].toLowerCase() ===
            birthPlaceArray[birthPlaceArray.length - 1].trim().toLowerCase()
        );
        return `https://flagcdn.com/16x12/${countryCode}.png`;
      });

    return flagpath;
  }

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-100 to-orange-200">
        <div className="text-xl font-semibold text-orange-800">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-100 to-orange-200">
      <Banner />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <ProfileHeader
              photoUrl={"/" + person.photoUrl}
              name={person.name}
              age={person.age}
              birthPlace={person.birth_place}
              flagUrl={flagUrl}
            />
            <div className="md:w-1/2 p-8 space-y-8">
              <ProfileInfoCard title="Team" content={person.team} />
              <ProfileSection title="Strengths" items={person.strengths} />
              <ProfileSection title="Weaknesses" items={person.weaknesses} />
            </div>
          </div>
          <div className="p-8 space-y-8 border-t border-gray-200">
            <ProfileInfoCard title="Fun Fact" content={person.fun_fact} />
            <ProfileInfoCard
              title="Description"
              content={person.description}
              overflow={true}
            />
            <ProfileInfoCard title="Born on" content={person.birth_date} />
            <Link
              to="/"
              className="inline-block bg-orange-800 text-white py-4 px-8 rounded-full hover:bg-orange-600 transition-colors text-lg font-semibold"
            >
              Back to Squad Page
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
