import { useAtomValue } from "jotai";
import { tournamentTitleReadOnlyAtom } from "../../lib/atoms";
import Logo from "./Logo";
import StepCard from "./StepCard";

const TimerHeaderContent = () => {
  const tournamentTitle = useAtomValue(tournamentTitleReadOnlyAtom);

  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <h1 className="font-montserrat text-3xl leading-10 text-white">
        {tournamentTitle}
      </h1>
      <StepCard />
    </nav>
  );
};

export default TimerHeaderContent;
