import { InformationPanel } from "./InformationPanel.js";
import { FloorList } from "./FloorList.js";

class UIManager {
  constructor(floorProperties) {
    this.floorProperties = floorProperties;

    this.informationPanel = new InformationPanel();
  }

  setSceneManager(sceneManager) {
    this.sceneManager = sceneManager;
  }

  setSearchBar(searchBar) {
    this.searchBar = searchBar;
  }

  // Populate all UI
  populateUI(floorList) {
    document.getElementById("back-arrow").onclick = () => {
      this.sceneManager.unfocus(floorList);
    }; // Unfocus on all floors when arrow is pressed

    this.floorList = new FloorList(this.sceneManager, floorList);
  }
}

export { UIManager };
