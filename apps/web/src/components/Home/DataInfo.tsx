import ActionValue from "./ActionValue";

const DataInfo = () => {
  return (
    <main className="flex gap-10 justify-center pb-10">
      <section className="w-[1400px] bg-[#1e1e1e] flex gap-8 px-8 py-6 rounded-3xl">
        <div className="flex flex-col gap-8 max-w-[650px] w-[650px]">
          <ActionValue/>
          <ActionValue/>
        </div>
        <div>

        </div>
      </section>
    </main>
  );
};

export default DataInfo;
