import Login from "./Login";

export default function Nav() {
  return (
    <div className="flex align-middle justify-between">
      <h1 className="text-cyan-400 text-2xl font-semibold">Yeller</h1>
      {/* <h1 className="text-white bg-green-600 px-4 py-1 rounded-md"></h1> */}
      <Login />
    </div>
  );
}
