import DrawerLinks from "../navigation/DrawerLinks";
import MainButton from "../ui/MainButton";

export default function Drawer({ isOpen, setIsOpen }) {
  return (
    <nav
      className={`fixed z-40 top-0 ${
        isOpen ? "left-0" : "-left-full"
      } w-full flex duration-300`}
    >
      <div className="w-10/12 px-8 py-16 bg-white backdrop-filter backdrop-blur-sm transition-shadow bg-opacity-90 shadow-zinc-700 drop-shadow-2xl h-screen">
        <DrawerLinks
          setIsOpen={setIsOpen}
          title={"Projects"}
          pathname={"/projects"}
        />
        <DrawerLinks
          setIsOpen={setIsOpen}
          title={"Services"}
          pathname={"/services"}
        />
        <DrawerLinks
          setIsOpen={setIsOpen}
          title={"About Me"}
          pathname={"/about"}
        />
        <div className="h-[3.5px] w-3/12 mt-4 bg-primary-black bg-opacity-30">

        </div>
        <div className="space-y-6 mt-8">
          <MainButton content={"My Resume"} isInversed={true} />
          <MainButton content={"Contact me"} />
        </div>
      </div>
      <div
        className={`w-2/12`}
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
    </nav>
  );
}
