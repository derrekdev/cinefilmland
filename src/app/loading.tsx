import { ImSpinner9 } from "react-icons/im";

export default function loading() {
  return (
    <main className="container flex justify-center items-center h-screen w-screen">
      <ImSpinner9 className="animate-spin h-40 w-40 mx-auto" />
    </main>
  );
}
