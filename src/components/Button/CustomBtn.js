import { useState } from "react";
import { darkCardAdd, lightCardAdd } from "../../assets";

const CustomBtn = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <img
      className="iconButtonImg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      src={isHovered ? lightCardAdd : darkCardAdd}
      alt="Hover to change"
    />
  );
};

export default CustomBtn;
