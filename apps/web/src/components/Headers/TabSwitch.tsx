import { useAtom } from "jotai";
import { HeaderTab, tabAtom } from "../../lib/atoms";

interface TabButtonProps {
  children: React.ReactNode;
  value: HeaderTab;
}

const TabButton = ({ children, value }: TabButtonProps) => {
  const [tab, setTab] = useAtom(tabAtom);

  const handleClick = () => setTab(value);

  const isActive = tab === value;
  const className = isActive
    ? "bg-white text-neutral-800"
    : "bg-neutral-800 text-white";

  return (
    <button
      onClick={handleClick}
      className={`w-28 rounded-2xl p-4 text-center text-xl uppercase ${className}`}
    >
      {children}
    </button>
  );
};

const TabSwitch = () => {
  return (
    <div className="items-align flex gap-4">
      <TabButton value="game">Jogo</TabButton>
      <TabButton value="data">Dados</TabButton>
    </div>
  );
};

export default TabSwitch;
