import { useAtomValue } from "jotai";
import Header from "../components/Headers/Header";
import TimerHandling from "../components/Home/TimerHandling";
import { tabAtom } from "../lib/atoms";
import GameInfo from "../components/Home/GameInfo";
import DataInfo from "../components/Home/DataInfo";

const Home = () => {
  const tab = useAtomValue(tabAtom);
  return (
    <div className="flex flex-col space-y-6">
      <Header />
      {tab === "game" ? <GameInfo /> : <DataInfo />}
      <TimerHandling />
    </div>
  );
};

export default Home;
