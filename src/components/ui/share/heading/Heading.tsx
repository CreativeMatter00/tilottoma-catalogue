
import { IHeading } from "@/types/share.type";
import { MdAdd } from "react-icons/md";

export default function Heading({
  headerName,
  subHeader,
  setOpen,
  buttonName,
  ButtonIcon = MdAdd,
}: IHeading) {
  return (
    <div className="flex items-center justify-between mb-2">
      <div>
        <p className="font-semibold text-slate-700 text-3xl">
          {headerName
            ? headerName.charAt(0).toUpperCase() + headerName.slice(1)
            : ""}
        </p>
        <p className="text-slate-500 text-opacity-60 font-medium">
          {subHeader}
        </p>
      </div>
      {buttonName && (
        <button
          onClick={() => setOpen?.(true)}
          className="bg-blueActual hover:bg-blueHover select-none px-3 py-2 rounded-md font-medium text-white hover:text-silver text-base flex justify-center items-center gap-2"
        >
          <ButtonIcon fontSize={20} className="text-white hover:text-silver" />
          {buttonName}
        </button>
      )}
    </div>
  );
}
