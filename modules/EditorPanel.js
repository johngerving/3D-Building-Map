import { InformationPanel } from "./InformationPanel.js";

class EditorPanel extends InformationPanel {
  constructor(floorProperties) {
    super();

    this.floorProperties = floorProperties;

    this.defaultView();

    this.toggle(true);
  }

  clear = () => {
    while (this.information_panel.firstChild) {
      this.information_panel.removeChild(this.information_panel.firstChild);
    }
  };

  addHeader = (text) => {
    const title = document.createElement("h1");
    title.setAttribute("id", "information-panel-name");
    title.appendChild(document.createTextNode(text));

    const divider = document.createElement("hr");
    divider.setAttribute("class", "divider");

    this.information_panel.appendChild(title);
    this.information_panel.appendChild(divider);
  };

  defaultView() {
    this.clear();
    this.addHeader("Editor");

    const ul = document.createElement("ul");
    this.floorProperties.forEach((floorProperty) => {
      const li = document.createElement("li");
      const button = document.createElement("BUTTON");

      button.setAttribute("class", "floor-selector highlight-onselect");
      button.appendChild(document.createTextNode(floorProperty.name));

      button.onclick = () => {
        this.floorView(floorProperty);
      };

      li.appendChild(button);
      this.information_panel.appendChild(li);
    });
    this.information_panel.appendChild(ul);
  }

  floorView = (floorProperty) => {
    this.clear();
    this.addHeader(floorProperty.name);
  };
}

export { EditorPanel };
