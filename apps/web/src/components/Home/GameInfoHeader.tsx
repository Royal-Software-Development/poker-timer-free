const VerticalLine = () => {
  return <hr className="h-9 w-px bg-white" />;
};

interface ColumnNameProps {
  children: React.ReactNode;
}

const ColumnName = ({ children }: ColumnNameProps) => {
  return <h3 className="text-xl font-bold text-white">{children}</h3>;
};

const GameInfoHeader = () => {
  return (
    <nav className="flex items-center justify-center gap-14">
      <ColumnName>Level</ColumnName>
      <VerticalLine />
      <ColumnName>Small</ColumnName>
      <VerticalLine />
      <ColumnName>Big</ColumnName>
      <VerticalLine />
      <ColumnName>Ante</ColumnName>
      <VerticalLine />
      <ColumnName>Time (min)</ColumnName>
      <VerticalLine />
      <ColumnName>Ação</ColumnName>
    </nav>
  );
};

export default GameInfoHeader;
