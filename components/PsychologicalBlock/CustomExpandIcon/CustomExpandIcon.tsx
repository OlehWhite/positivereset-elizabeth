import { Box } from "@mui/material";
import IMGMinus from "../../../public/minus.png";
import IMGPlus from "../../../public/plus.png";
import Image from "next/image";

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
        },
      }}
    >
      <div className="expandIconWrapper">
        <Image
          width={20}
          height={20}
          src={IMGMinus}
          alt="Minus"
          title="Minus"
        />
      </div>
      <div className="collapsIconWrapper">
        <Image width={20} height={20} src={IMGPlus} alt="Plus" title="Plus" />
      </div>
    </Box>
  );
};
export default CustomExpandIcon;
