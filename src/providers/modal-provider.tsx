import { Drawer } from "@/components/drawers/drawer";
import { Modal1 } from "@/components/modals/modal1";
import { Modal2 } from "@/components/modals/modal2";
import { useModal } from "@/hooks/use-modal";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const { stack } = useModal();

  const modals = stack.map((modal) => {
    switch (modal.type) {
      case "modal1":
        return <Modal1 key={modal.type} />;
      case "modal2":
        return <Modal2 key={modal.type} />;
      case "drawer":
        return <Drawer key={modal.type} />;
      default:
        return null;
    }
  });

  return (
    <div>
      {children}
      {modals}
    </div>
  );
};
