import { UIManager } from "./UIManager.js";
import { EditorPanel } from "./EditorPanel.js";

class EditorUIManager extends UIManager {
  constructor(floorProperties) {
    super();

    this.floorProperties = floorProperties;

    this.editorPanel = new EditorPanel(this.floorProperties);
  }
}

export { EditorUIManager };
