import { ParentComponent } from "./components/DesignPatterns-Functional Programming/ObserverPattern/parent";
import mitt from "mitt";
export const emitter = mitt()

function App() {
  return (
    <>
      <ParentComponent/>
    </>
  );
}

export default App;
