import { Modal1Data, useModal } from "@/hooks/use-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

export const Modal1 = () => {
  const { close, open, getModalData } = useModal<Modal1Data>("modal1");
  const data = getModalData();

  return (
    <Dialog open={true} onOpenChange={close}>
      <DialogContent className="max-w-[900px]">
        <DialogHeader>
          <DialogTitle>[Modal1] Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div>{JSON.stringify(data)}</div>
          <Button onClick={() => open({ type: "modal2", data: { age: 10 } })}>
            Open Modal2
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
