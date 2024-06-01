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

    const form = document.createElement("form");

    const name = this.addFormInput("Name");
    form.appendChild(name);

    const svg = this.addFormInput("SVG");
    form.appendChild(svg);

    const scale = this.addFormInput("Scale");
    form.appendChild(scale);

    const positionDiv = document.createElement("div");
    positionDiv.setAttribute("class", "form-group");

    const xInput = document.createElement("input");
    xInput.setAttribute("type", "text");
    xInput.setAttribute("name", "XPosition");

    const yInput = document.createElement("input");
    yInput.setAttribute("type", "text");
    yInput.setAttribute("name", "YPosition");

    const xLabel = document.createElement("label");
    xLabel.setAttribute("for", "XPosition");
    xLabel.appendChild(document.createTextNode("X"));

    const yLabel = document.createElement("label");
    yLabel.setAttribute("for", "YPosition");
    yLabel.appendChild(document.createTextNode("Y"));

    positionDiv.appendChild(xLabel);
    positionDiv.appendChild(xInput);
    positionDiv.appendChild(yLabel);
    positionDiv.appendChild(yInput);

    form.appendChild(positionDiv);

    this.information_panel.appendChild(form);
  };

  addFormInput = (name) => {
    const div = document.createElement("div");
    div.setAttribute("class", "form-group");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", name);
    const label = document.createElement("label");
    label.setAttribute("for", name);
    label.appendChild(document.createTextNode(name));

    div.appendChild(label);
    div.appendChild(input);
    return div;
  };
}

export { EditorPanel };
