import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import getCurrentUser from "@/actions/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div
      className="
  sticky
  top-0
  w-full
  bg-black
  text-gray-100
  z-30
  shadow-md
  "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          items-center
          justify-between
          gap-3
          md:gap-0
          "
          >
        <Link href="/">
          <h1 className="text-white font-bold text-xl lg:text-3xl">
            ME<span className="text-red-800">Mart & Rest</span>
          </h1>
        </Link>
            {/* <div className="hidden md:block"><SearchBar/></div> */}
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories/>
    </div>
  );
};

export default NavBar;
