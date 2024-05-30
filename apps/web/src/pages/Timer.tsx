import Counter from "../components/Timer/Counter";
import Header from "../components/Headers/Header";
import Infos from "../components/Timer/Infos";
import ProgressBar from "../components/Timer/ProgressBar";

const Timer = () => {
  return (
    <div className="flex h-screen flex-col justify-between gap-4 pb-6">
      <Header />
      <Counter />
      <div className="flex flex-col gap-10">
        <ProgressBar />
        <Infos />
      </div>
    </div>
  );
};

export default Timer;
