type Props = {
  pic: string;
};

export default function Welcome({ pic }: Props) {
  return (
    <div className=" flex flex-col   space-y-14 ">
      <h1 className="  w1/3 text-center text-3xl uppercase text-white tracking-[4px]">
        Welcome to Recrio 🥳
      </h1>
      <div className="w-2/3 mx-auto">
        <img
          className=" inset-0 w-full"
          src={pic}
          alt="formPic"
          loading="lazy"
        />
      </div>
    </div>
  );
}
