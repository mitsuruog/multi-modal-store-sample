import { DrawerData, useModal } from "@/hooks/use-modal";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Button } from "../ui/button";

export const Drawer = () => {
  const { close, open, getModalData } = useModal<DrawerData>("drawer");
  const data = getModalData();

  return (
    <Sheet open={true} onOpenChange={close}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
          <div>
            <div>{JSON.stringify(data)}</div>
            <Button
              onClick={() => open({ type: "modal1", data: { name: "Mitz" } })}
            >
              Open Modal1
            </Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
