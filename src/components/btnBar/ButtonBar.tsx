type Props = {
  lastWeek?: () => void;
  currentWeek?: () => void;
};
type BtnProps = {
  name: string;
  cliclHandler?: () => void;
};
const ButtonBar = ({ lastWeek, currentWeek }: Props) => {
  return (
    <div className="flex flex-row  justify-center items-center space-x-4 px-2 md:px-8 ">
      <Button name={"Current"} cliclHandler={currentWeek} />
      <Button name={"1vko"} cliclHandler={lastWeek} />
      <Button name={"1kk"} />
      <Button name={"6kk"} />
    </div>
  );
};

const Button = ({ name, cliclHandler }: BtnProps) => {
  return (
    <>
      <button
        className="btn px-2 py-1
        md:px-3 md:py-1 
        xl:px-8 xl:py-1   md:first:mr-auto"
        onClick={cliclHandler}
      >
        <span>{name}</span>
      </button>
    </>
  );
};

export default ButtonBar;
