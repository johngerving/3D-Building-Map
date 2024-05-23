import fuzzysort from "fuzzysort";
import { gsap } from "gsap";

class UIManager {
  constructor(floorProperties) {
    this.floorProperties = floorProperties;

    this.information_panel = document.getElementById("information-panel");
    this.search_bar = document.getElementById("search-bar");
    this.clear_search_button = document.getElementById("clear-search");

    // Get elements inside information panel
    this.information_panel_img = document.getElementById(
      "information-panel-img"
    );
    this.information_panel_name = document.getElementById(
      "information-panel-name"
    );
    this.information_panel_description = document.getElementById(
      "information-panel-description"
    );

    // Get element with list of results
    this.search_results_ul = document.getElementById("search-items");

    this.floorDiv = document.getElementById("floor-buttons");
  }

  setSceneManager(sceneManager) {
    this.sceneManager = sceneManager;
  }

  searchBarInputHandler = (e) => {
    if (e.target.value.length > 0) {
      this.toggleSearchBarCloseButton(true); // Enable close button

      this.toggleSearchBarResults(e.target.value, true); // Show search bar results
    } else {
      // Disable close button if the information panel isn't enabled
      if (this.information_panel.style.display == "none") {
        this.toggleSearchBarCloseButton(false);
      }

      this.toggleSearchBarResults("", false); // Disable search bar results
    }
  };

  // Event handler for focusing on search bar
  searchBarFocusIn = (e) => {
    if (this.search_bar.value.length > 0) {
      this.toggleSearchBarResults(this.search_bar.value, true);
    }
  };

  // Event handler for losing focus on search bar
  searchBarFocusOut = (e) => {
    // If the selection is not the search results, disable the search results
    if (
      !e.relatedTarget ||
      (e.relatedTarget &&
        !e.relatedTarget.classList.contains("search-result-button"))
    ) {
      this.toggleSearchBarResults("", false);
    }
  };

  // Populate all UI
  populateUI(floorList) {
    document.getElementById("back-arrow").onclick = () => {
      this.sceneManager.unfocus(floorList);
    }; // Unfocus on all floors when arrow is pressed

    // Disable information panel by default
    this.information_panel.style.display = "none";

    // Listen for input - if there is text in the search bar, make the close button visible
    this.search_bar.addEventListener(
      "input",
      this.searchBarInputHandler.bind(this)
    );

    // When the search bar is selected, show the search results if the user has typed anything in
    this.search_bar.addEventListener(
      "focusin",
      this.searchBarFocusIn.bind(this)
    );

    // When the search bar is deselected, hide the search results
    this.search_bar.addEventListener(
      "focusout",
      this.searchBarFocusOut.bind(this)
    );

    // If the clear search button is clicked, clear the search bar, hide the information panel, and disable the close button
    this.clear_search_button.onclick = () => {
      this.search_bar.value = "";
      this.toggleInformationPanel(false);
      this.toggleSearchBarCloseButton(false);
      this.sceneManager.toggleLocationIndicator("", false);
    };

    this.floorListUI(floorList); // Populate list of floors with enable/disable checkboxes
  }

  // Given location data, update the information panel
  updateInformationPanel = (location) => {
    // If there is no image provided, disable the image in the information panel
    if (!location.img) {
      this.information_panel_img.style.display = "none";
    }

    // If the location has a name,
    if (location.name) {
      this.information_panel_name.textContent = location.name; // Set title in information panel to location name
      this.search_bar.value = location.name; // Set search bar value to location name
      this.toggleSearchBarCloseButton(true); // Enable the close button

      // If the location is a room, add "room" to the title
      if (location.type == "Room") {
        this.information_panel_name.textContent = "Room " + location.name;
      }
    }

    // If the location is a room, set the description to "room" - if the location has a description, this will be overridden
    if (location.type == "Room") {
      this.information_panel_description.textContent = "Room";
    }
    // If the location has a description, set the text content of the description element to the location description
    if (location.description) {
      this.information_panel_description.textContent = location.description;
    }
  };

  // Enable/disable the information panel
  toggleInformationPanel = (isVisible) => {
    if (isVisible) {
      // Start an animation moving the information panel right to be in view
      this.information_panel.style.display = "block";
      gsap.to("#information-panel", { left: 0, duration: 0.25 });
    } else {
      // Start an animation moving the information panel left to be out of view
      const information_panel = this.information_panel;
      gsap.to("#information-panel", {
        left: -360,
        duration: 0.25,
        onComplete: function () {
          information_panel.style.display = "none";
        },
      });
    }
  };

  // Enable/disable the close button
  toggleSearchBarCloseButton = (isVisible) => {
    // Get the div containing the close button
    const clear_search_div = document.getElementById("clear-search-div");
    // Enable/disable button
    if (isVisible) {
      clear_search_div.style.display = "block";
    } else {
      clear_search_div.style.display = "none";
    }
  };

  // Get search bar results given the input value and number of results
  searchBarResults = (term, n) => {
    // Compile array of locations
    let locations = [];
    this.floorProperties.forEach((floorProperty) => {
      locations = locations.concat(floorProperty.locations);
    });

    // Search for locations by name and sort by relevance
    const results = fuzzysort.go(term, locations, { key: "name", limit: n });

    // Return n results
    return results.map((result) => result.obj);
  };

  // Enable/Disable search bar results panel
  toggleSearchBarResults = (term, isVisible) => {
    if (isVisible) {
      // Clear search bar results
      this.toggleSearchBarResults("", false);

      // Get 5 most relevant search results
      let search_results = this.searchBarResults(term, 5);

      // For each result, make a button
      search_results.forEach((result) => {
        const li = document.createElement("li");
        const button = document.createElement("BUTTON");

        button.setAttribute("class", "search-result-button highlight-onselect");
        button.appendChild(document.createTextNode(result.name)); // Set button text to location name

        // When button is clicked, update information panel with location information, enable information panel, and disable search bar results
        button.onclick = () => {
          this.updateInformationPanel(result);
          this.toggleInformationPanel(true);
          this.toggleSearchBarResults("", false);
          this.sceneManager.toggleLocationIndicator(result, true);
        };

        // Add list to search bar results
        li.appendChild(button);
        this.search_results_ul.appendChild(li);
      });

      // Change the border radius of the search bar to line up with the search results
      this.search_bar.style.borderRadius = "15px 15px 0 0";
      // Add a box shadow to the search results
      this.search_results_ul.style.boxShadow =
        "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset";
    } else {
      // Remove all search results
      while (this.search_results_ul.firstChild) {
        this.search_results_ul.removeChild(this.search_results_ul.firstChild);
      }

      // Reset border radius of search bar
      this.search_bar.style.borderRadius = "25px";
      // Remove box shadow from search results
      this.search_results_ul.style.boxShadow = "none";
    }
  };

  // Populate list of floors in UI
  floorListUI = (floorList) => {
    // For each floor, add a button to the div
    floorList.forEach((floor) => {
      let button = document.createElement("BUTTON");
      button.setAttribute("class", "highlight-onselect");
      button.appendChild(document.createTextNode(floor.name));

      // Focus on floor when clicked
      button.onclick = () => {
        this.sceneManager.focusOnFloor(floorList, floor);
      };

      this.floorDiv.appendChild(button);
    });
  };
}

export { UIManager };
