import tw from "tailwind-styled-components";

const S = {
  NavItem: tw.div`
  cursor-pointer

  mobile:text-[16px]

  ipad:text-[18px]

  ${(p) =>
    p.$isActive ? `font-black` : `font-normal`}
`,
};

export default S.NavItem;
