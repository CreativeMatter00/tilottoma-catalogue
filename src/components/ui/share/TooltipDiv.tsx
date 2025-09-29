import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineTrash } from "react-icons/hi2";
import { ITooltipDiv } from "../share.type";
import { BiEdit } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const TooltipDiv: React.FC<ITooltipDiv> = ({ name, labelId = "show data" }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <label htmlFor={labelId} className="cursor-pointer">
            {name === "Edit" && (
              <BiEdit
                fontSize={24}
                className="text-natural-500 hover:text-natural-700"
              />
            )}
            {name === "View" && (
              <IoEyeOutline
                fontSize={20}
                className="text-natural-500 hover:text-natural-700"
              />
            )}
            {name === "Delete" && (
              <HiOutlineTrash
                fontSize={24}
                className="text-natural-500 hover:text-primary-red-500"
              />
            )}
          </label>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipDiv;
