interface Props {
  children: React.ReactNode;
}

const ContentCard = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 rounded-3xl bg-neutral-800 px-8 py-5">
      {children}
    </div>
  );
};

export default ContentCard;
