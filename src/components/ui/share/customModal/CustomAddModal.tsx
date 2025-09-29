import { MdAdd } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../dialog";

interface CustomAddModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  buttonName: string;
  ButtonIcon?: React.ElementType;
  children: React.ReactNode;
  modalTitle: string;
  dialogContentClassNames?: string;
}

const CustomAddModal: React.FC<CustomAddModalProps> = ({
  open,
  setOpen,
  buttonName,
  ButtonIcon = MdAdd,
  children,
  modalTitle,
  dialogContentClassNames = "bg-white w-[80vw] max-h-[90vh] overflow-y-auto text-natural-700",
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="bg-primary-red-500 px-3 py-2 rounded-md font-medium text-white text-base flex justify-center items-center gap-2">
          <ButtonIcon fontSize={20} className="text-white" />
          {buttonName}
        </div>
      </DialogTrigger>

      <DialogContent className={`${dialogContentClassNames}`}>
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-natural-700 font-semibold text-2xl">
            {modalTitle}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomAddModal;
