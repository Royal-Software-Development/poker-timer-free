import ActionCounterForm from "./ActionCounterForm";
import ActionValueForm from "./ActionValueForm";
import PlayersInForm from "./PlayersInForm";
import PrizeForm from "./PrizeForm";

const DataInfo = () => {
  return (
    <main className="flex gap-10 justify-center">
      <section className="flex w-[1400px] bg-[#1e1e1e] gap-6 px-8 py-6 rounded-3xl">
        <div className="flex flex-col gap-6 max-w-[650px] w-full">
          <ActionValueForm />
          <ActionCounterForm />
        </div>
        <div className="flex flex-col gap-6 max-w-[650px] w-full">
          <PlayersInForm />
          <PrizeForm />
        </div>
      </section>
    </main>
  );
};

export default DataInfo;
