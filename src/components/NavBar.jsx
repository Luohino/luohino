import { TubelightNavbar } from "./TubelightNavbar";
import { Home, User, Briefcase, Mail } from "lucide-react";

const NavBar = () => {
  const navItems = [
    { name: "Home", url: "#hero", icon: Home },
    { name: "About", url: "#message", icon: User },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Contact", url: "#footer", icon: Mail },
  ];

  return (
    <>
      {/* Logo */}
      <div className="fixed top-0 left-0 z-50 md:p-9 p-3">
        <img src="/luohino/images/nav-logo.svg" alt="nav-logo" className="md:w-24 w-20 mt-3 md:mt-2" />
      </div>
      
      {/* Tubelight Navigation */}
      <TubelightNavbar items={navItems} />
    </>
  );
};

export default NavBar;
