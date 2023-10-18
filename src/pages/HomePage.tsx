//imgs
import formPic from "../assets/bk.svg";
//components
import Welcome from "../components/WelcomeMsg/Welcome";
import Login from "../components/LoginForm/Login";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className=" hidden flex-auto  md:inline-block lg:basis-1/2 ">
        <Welcome pic={formPic} />
      </div>
      <div className="basis-full flex-1   md:basis-1/2 ">
        <Login />
      </div>
    </div>
  );
}
