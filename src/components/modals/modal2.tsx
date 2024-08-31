import { Modal2Data, useModal } from "@/hooks/use-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export const Modal2 = () => {
  const { close, getModalData } = useModal<Modal2Data>("modal2");
  const data = getModalData();

  return (
    <Dialog open={true} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>[Modal2] Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div>{JSON.stringify(data)}</div>
      </DialogContent>
    </Dialog>
  );
};
