import { ReactNode } from "react";
import { Person } from "../typings";

interface Props {
  character: Person;
  children: ReactNode;
}

const CharacterCard = ({ character, children }: Props) => {
  return (
    <div className="mt-6 w-80 rounded-xl border-0 p-6 text-center shadow-lg shadow-blue-100">
      <h3 className="text-2xl font-bold hover:text-blue-600 focus:text-blue-600">
        {character.name}
      </h3>
      <div className="mt-10 text-lg space-y-2">
        <p className="font-bold">
          Birth year: <span className="font-normal">{character.birthYear}</span>
        </p>
        <p className="font-bold">
          Gender: <span className="font-normal">{character.gender}</span>
        </p>
        <p className="font-bold">
          Eye color: <span className="font-normal">{character.eyeColor}</span>
        </p>
        <p className="font-bold">
          Hair color: <span className="font-normal">{character.hairColor}</span>
        </p>
      </div>
      {children}
    </div>
  );
};

export default CharacterCard;
