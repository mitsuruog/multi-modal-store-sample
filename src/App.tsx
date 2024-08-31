import { Button } from "./components/ui/button";
import { useModal } from "./hooks/use-modal";
import { ModalProvider } from "./providers/modal-provider";

function App() {
  const { open } = useModal();

  return (
    <ModalProvider>
      <div className="min-h-screen w-auto flex flex-col items-center justify-center gap-8">
        <h1>React 18 App</h1>
        <div className="flex gap-4">
          <Button
            onClick={() => open({ type: "modal1", data: { name: "Joe" } })}
          >
            Open Modal
          </Button>
          <Button
            onClick={() => open({ type: "drawer", data: { drawer: true } })}
          >
            Open Drawer
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
