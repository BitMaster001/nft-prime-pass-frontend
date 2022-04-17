import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import NavItem from "./NavItem";
import { useWindowWidth } from "@react-hook/window-size";
import AnchorLink from "react-anchor-link-smooth-scroll";

const s = {
  Navbar: tw.div`
  flex items-center justify-around
  
  mobile:flex-col
  mobile:gap-1
  
  ipad:flex-row
  ipad:gap-[50px]
`,
};

const Navbar = ({ setIsOpened }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const width = useWindowWidth();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(width); 
  }, [width]);

  const navItems = [
    { name: "home", caption: "Home" },
    { name: "roadmap", caption: "Roadmap" },
    { name: "faq", caption: "Faq" },
  ];
  return (
    <s.Navbar>
      {navItems.map((navItem, index) => (
        <AnchorLink offset={() => screenWidth < 500 ? 71 : 108} href={`#${navItem.name}`} key={index}>
          <NavItem
            $isActive={activeIndex === index}
            onClick={() => {
              setActiveIndex(index);
              setIsOpened(false);
            }}
          >
            {navItem.caption}
          </NavItem>
        </AnchorLink>
      ))}
    </s.Navbar>
  );
};

export default Navbar;
