import Logo from "./Logo";
import TabSwitch from "./TabSwitch";
import TournamentNameField from "./TournamentNameField";
import Controls from "./Controls";

const HomeHeaderContent = () => {
  return (
    <nav className="flex w-full items-center justify-between">
      <Logo />
      <div className="flex items-center gap-5">
        <TabSwitch />
        <TournamentNameField />
        <Controls />
      </div>
    </nav>
  );
};

export default HomeHeaderContent;
