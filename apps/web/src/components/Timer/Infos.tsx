import { useAtomValue } from "jotai";
import { blindsReadOnlyAtom, levelAtom } from "../../lib/atoms";
import ContentCard from "@poker-time/ui/contentCard";

interface Props {
  children: React.ReactNode;
  size: "small" | "large";
}

const CardTitle = ({ children, size }: Props) => {
  const className =
    size === "small" ? "leading-5 text-2xl" : "leading-negative-1 text-6xl";
  return (
    <h4
      className={`text-center text-2xl font-extrabold text-white ${className}`}
    >
      {children}
    </h4>
  );
};

const CardText = ({ children, size }: Props) => {
  const className =
    size === "small" ? "text-2xl" : "leading-negative-1 text-8xl";
  return (
    <p className={`text-center leading-5 text-white ${className}`}>
      {children}
    </p>
  );
};

const Infos = () => {
  const level = useAtomValue(levelAtom);
  const blinds = useAtomValue(blindsReadOnlyAtom);

  const currentBlinds = blinds[level];
  const nextBlinds = blinds[level + 1];

  return (
    <div className="mx-6 grid grid-cols-2 gap-2">
      <ContentCard>
        <CardTitle size="large">Blinds</CardTitle>
        <hr className="w-4/5" />
        <div className="flex flex-col gap-3">
          <div className="flex gap-10">
            <CardText size="large">{currentBlinds.small}</CardText>
            <hr className="h-full w-px bg-white" />
            <CardText size="large">{currentBlinds.big}</CardText>
          </div>
          <hr className="w-full" />
          <div className="flex flex-col gap-8">
            <p className="text-center text-6xl leading-negative-1 text-white">
              ({currentBlinds.big})
            </p>
            {!!nextBlinds && (
              <p className="text-center text-2xl leading-5 text-white">
                <span className="text-green-700">Next:</span>{" "}
                {`${nextBlinds.small}/${nextBlinds.big} (${nextBlinds.big})`}
              </p>
            )}
          </div>
        </div>
      </ContentCard>
      <div className="grid grid-rows-3 gap-2">
        <div className="grid grid-cols-4 gap-2">
          <ContentCard>
            <CardTitle size="small">Players</CardTitle>
            <hr className="w-full" />
            <div className="align-center flex justify-center gap-4">
              <CardText size="small">9</CardText>
              <hr className="h-full w-px bg-white" />
              <CardText size="small">40</CardText>
            </div>
          </ContentCard>
          <ContentCard>
            <CardTitle size="small">Chip Count</CardTitle>
            <hr className="w-full" />
            <CardText size="small">200k</CardText>
          </ContentCard>
          <ContentCard>
            <CardTitle size="small">Buy-ins</CardTitle>
            <hr className="w-full" />
            <CardText size="small">37</CardText>
          </ContentCard>
          <ContentCard>
            <CardTitle size="small">
              Buy-ins <span className="font-normal">(Double)</span>
            </CardTitle>
            <hr className="w-full" />
            <CardText size="small">37</CardText>
          </ContentCard>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <ContentCard>
            <CardTitle size="small">Rebuy</CardTitle>
            <hr className="w-full" />
            <CardText size="small">37</CardText>
          </ContentCard>
          <ContentCard>
            <CardTitle size="small">
              Rebuy <span className="font-normal">(Double)</span>
            </CardTitle>
            <hr className="w-full" />
            <CardText size="small">37</CardText>
          </ContentCard>
          <ContentCard>
            <CardTitle size="small">Chip Time</CardTitle>
            <hr className="w-full" />
            <CardText size="small">37</CardText>
          </ContentCard>
          <ContentCard>
            <CardTitle size="small">Addon</CardTitle>
            <hr className="w-full" />
            <CardText size="small">37</CardText>
          </ContentCard>
        </div>
        <ContentCard>
          <CardTitle size="small">Prize</CardTitle>
          <hr className="w-full" />
          <div className="align-center flex justify-center gap-4">
            <CardText size="small">1- R$3000</CardText>
            <hr className="h-full w-px bg-white" />
            <CardText size="small">2- R$3000</CardText>
            <hr className="h-full w-px bg-white" />
            <CardText size="small">3- R$3000</CardText>
            <hr className="h-full w-px bg-white" />
            <CardText size="small">4- R$3000</CardText>
          </div>
        </ContentCard>
      </div>
    </div>
  );
};

export default Infos;
