# Plugin to add basic Modal component from HRnet project

A React-Component for the HRnet project from Openclassroom.
It appears when a user is successfully created.

## Features

- Dynamic diplay control
- Lock the webpage controls as long as the modal is shown
- Provides 2 actions: click outside & confirm

## Get started

### Download

[hrnet-modal](https://www.npmjs.com/package/hrnet-modal)

### Requirements

- React 18

### Installation

- using npm
  `npm install hrnet-modal`

- using yarn
  `yarn add hrnet-modal`

### Usage

Import the plugin from node_modules in your React component.
The Modal requires 2 props to work:

- `isOpen`(boolean): variable controlling the display of the modal
- `onConfirm`(function): action triggered when clicking on the 'check' icon (& triggered on clicking outside the modal if no action is provided for this action)
  The Modal has 2 optionnal props:
- `message`(string): personnalized message written on the modal
- `onClickOutside`(function): action triggered when clicking outside the modal

_ExampleAppComponent.js_

```javascript
import Modal from "./lib/Modal";
import { useState } from "react";

function ExampleAppComponent() {
  const [modalSwitch, setModalSwitch] = useState(false);

  const toggleModal = () => setModalSwitch(!modalSwitch);

  return (
    <div className="App">
      <div onClick={toggleModal}>Click here to open modal</div>

      <Modal modalStatus={modalSwitch} onConfirm={toggleModal} />
    </div>
  );
}

export default ExampleAppComponent;
```
