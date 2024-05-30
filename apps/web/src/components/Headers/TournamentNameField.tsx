import { useAtom } from "jotai";
import { tournamentAtom } from "../../lib/atoms";
import { useState } from "react";

const TournamentNameField = () => {
  const [tournament, setTournament] = useAtom(tournamentAtom);
  const [internalName, setInternalName] = useState(tournament.title);

  const onClick = () => {
    setTournament((prev) => ({ ...prev, title: internalName }));
  };

  return (
    <div className="flex items-center gap-2 rounded-2xl bg-neutral-800 px-4 py-3">
      <input
        type="text"
        value={internalName}
        onChange={(e) => setInternalName(e.target.value)}
        className="w-full rounded-lg bg-neutral-900 px-3 py-2 text-base text-white"
      />
      <button
        onClick={onClick}
        className="rounded-lg bg-neutral-900 px-4 py-2 text-base text-white"
      >
        Renomear
      </button>
    </div>
  );
};

export default TournamentNameField;
