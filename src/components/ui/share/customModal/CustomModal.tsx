import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ICustomModal } from "@/types/share.type";


export default function CustomModal({
  open,
  onOpenChange,
  title,
  children,
  dialogWidth = "sm:max-w-[80vw]",
  dialogHeight = "",
  classes,
  headerRequired = false,
}: ICustomModal) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`bg-white text-natural-800 p-6 w-[80vw] max-h-[90vh] overflow-y-auto ${dialogWidth} ${dialogHeight} ${classes}`}
      >
        {headerRequired && (
          <DialogTitle className="text-xl text-natural-800 font-semibold">
            {title}
          </DialogTitle>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
}
