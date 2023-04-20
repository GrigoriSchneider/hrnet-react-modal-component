import Modal from "./lib/Modal";
import { useState } from "react";

function App() {
  const [modalSwitch, setModalSwitch] = useState(false);

  const toggleModal = () => setModalSwitch(!modalSwitch);

  return (
    <div className="App">
      <div onClick={toggleModal}>Click here to open modal</div>

      <Modal modalStatus={modalSwitch} onConfirm={toggleModal} />
    </div>
  );
}

export default App;
