import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Banner from "../banner";
import Footer from "../footer";

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
}

const Profile: React.FC = () => {
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
        <div className="text-2xl font-bold text-orange-800">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-100 to-orange-200">
      <Banner />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden">
            <img
              src={"/" + person.photoUrl}
              alt={person.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-5xl font-bold text-white mb-2">
                {person.name}
              </h1>
              <div className="flex items-center text-white">
                <span className="text-2xl mr-4">Age: {person.age}</span>
                <span className="text-xl flex items-center">
                  From: {person.birth_place}
                  <img
                    src={flagUrl}
                    alt={`${person.birth_place} flag`}
                    className="inline-block ml-2"
                    style={{
                      width:
                        person.birth_place.toLowerCase() === "corsica"
                          ? "1em"
                          : "16px",
                      height:
                        person.birth_place.toLowerCase() === "corsica"
                          ? "1em"
                          : "12px",
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-orange-800">
                  Strengths
                </h2>
                {person.strengths && (
                  <ul className="list-disc list-inside text-gray-700">
                    {person.strengths.map((strength, index) => (
                      <li key={index}>{strength}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-orange-800">
                  Weaknesses
                </h2>
                {person.weaknesses && (
                  <ul className="list-disc list-inside text-gray-700">
                    {person.weaknesses.map((weakness, index) => (
                      <li key={index}>{weakness}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-orange-800">
                Fun Fact
              </h2>
              <p className="text-gray-700">{person.fun_fact}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-orange-800">
                Description
              </h2>
              <p className="text-gray-700">{person.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-orange-800">
                Born on
              </h2>
              <p className="text-gray-700">{person.birth_date}</p>
            </div>
            <Link
              to="/"
              className="inline-block bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition-colors text-lg font-semibold"
            >
              Back to Squad Page
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
