import Header from "../components/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-[60px] w-screen h-screen flex justify-center items-center">
        <h1>Capture, organize, and tackle your to-dos from anywhere.</h1>
        <h3>Escape the clutter and chaos—unleash your productivity with Koral Table.</h3>
      </div>
    </div>
  );
}
