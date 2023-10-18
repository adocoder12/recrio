import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="max-w-full h-[50vh] relative flex flex-col  p-4 rounded-md space-y-8 text-black bg-white md:m-auto lg:max-w-md md:mx-auto md:scale-110 md:justify-around">
      <h1 className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Login
      </h1>
      <form className="flex flex-col gap-3">
        <div className="block relative">
          <label
            id="email"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          />
        </div>
        <div className="block relative">
          <label
            id="password"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>
        <div>
          <Link className="text-sm text-[#7747ff]" to="/">
            Forgot your password?
          </Link>
        </div>
        <button
          type="submit"
          className="bg-slate-700 w-full  m-auto px-6 py-2 rounded text-white text-sm font-normal"
        >
          Submit
        </button>
      </form>
      <div className="text-sm text-center mt-[1.6rem]">
        Don’t have an account yet?
        <Link className="text-sm text-[#7747ff]" to="/">
          Sign up for free!
        </Link>
      </div>
    </div>
  );
}
