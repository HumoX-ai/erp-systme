import { To, useNavigate } from "react-router-dom";
import { SvgIcon } from "../../ui/svgIcon";

export const BackArrow = ({ route }: { route: To | number }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => navigate(route as To)}
    >
      <SvgIcon
        iconName="backArrow"
        width="26"
        height="26"
        strokeColor={"#000"}
      />
    </div>
  );
};
