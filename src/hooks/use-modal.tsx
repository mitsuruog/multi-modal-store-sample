import { atom, useAtom } from "jotai";

type ModalType = "modal1" | "modal2" | "drawer";

export type Modal1Data = {
  type: Extract<ModalType, "modal1">;
  data: {
    name: string;
  };
};

export type Modal2Data = {
  type: Extract<ModalType, "modal2">;
  data: {
    age: number;
  };
};

export type DrawerData = {
  type: Extract<ModalType, "drawer">;
  data: {
    drawer: boolean;
  };
};

export type ModalStore = Modal1Data | Modal2Data | DrawerData;

const modalStackAtom = atom<ModalStore[]>([]);

export const useModal = <T extends ModalStore>(modalType?: T["type"]) => {
  const [stack, setStack] = useAtom(modalStackAtom);

  const open = (modal: ModalStore) => {
    setStack((prev) => [...prev, modal]);
  };

  const close = () => {
    setStack((prev) => prev.slice(0, prev.length - 1));
  };

  const getModalData = (): T["data"] | null => {
    const modalData = stack.find((modal) => modal.type === modalType);
    if (modalData) {
      return modalData.data;
    }
    return null;
  };

  return {
    open,
    close,
    stack,
    getModalData,
  };
};
