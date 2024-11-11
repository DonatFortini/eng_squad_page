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

interface SquadGridProps {
  profiles: Profile[];
}

export default function SquadGrid({ profiles }: SquadGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} person={profile} />
      ))}
    </div>
  );
}
