class FloorList {
  constructor(sceneManager, floorList) {
    this.sceneManager = sceneManager;
    this.floorList = floorList;

    this.floorDiv = document.getElementById("floor-buttons");

    // Populate list of floors in UI - for each floor, add a button to the div
    this.floorList.forEach((floor) => {
      let button = document.createElement("BUTTON");
      button.setAttribute("class", "highlight-onselect");
      button.appendChild(document.createTextNode(floor.name));

      // Focus on floor when clicked
      button.onclick = () => {
        this.sceneManager.focusOnFloor(floorList, floor);
      };

      this.floorDiv.appendChild(button);
    });
  }
}

export { FloorList };
