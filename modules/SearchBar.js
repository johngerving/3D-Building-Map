import fuzzysort from "fuzzysort";

class SearchBar {
  constructor(floorProperties, sceneManager, informationPanel) {
    this.floorProperties = floorProperties;
    this.sceneManager = sceneManager;
    this.informationPanel = informationPanel;

    this.search_bar = document.getElementById("search-bar");
    this.clear_search_button = document.getElementById("clear-search");

    // Get element with list of results
    this.search_results_ul = document.getElementById("search-items");

    // Listen for input - if there is text in the search bar, make the close button visible
    this.search_bar.addEventListener("input", this.inputHandler.bind(this));

    // When the search bar is selected, show the search results if the user has typed anything in
    this.search_bar.addEventListener("focusin", this.focusIn.bind(this));

    // When the search bar is deselected, hide the search results
    this.search_bar.addEventListener("focusout", this.focusOut.bind(this));

    // If the clear search button is clicked, clear the search bar, hide the information panel, and disable the close button
    this.clear_search_button.onclick = () => {
      this.setValue("");
      this.informationPanel.toggle(false);
      this.toggleClearButton(false);
      this.sceneManager.toggleLocationIndicator("", false);
    };
  }

  setValue = (value) => {
    this.search_bar.value = value;
  };

  inputHandler = (e) => {
    if (e.target.value.length > 0) {
      this.toggleClearButton(true); // Enable close button

      this.toggleResults(e.target.value, true); // Show search bar results
    } else {
      // Disable close button if the information panel isn't enabled
      if (this.information_panel.style.display == "none") {
        this.toggleClearButton(false);
      }

      this.toggleResults("", false); // Disable search bar results
    }
  };

  // Event handler for focusing on search bar
  focusIn = (e) => {
    if (this.search_bar.value.length > 0) {
      this.toggleResults(this.search_bar.value, true);
    }
  };

  // Event handler for losing focus on search bar
  focusOut = (e) => {
    // If the selection is not the search results, disable the search results
    if (
      !e.relatedTarget ||
      (e.relatedTarget &&
        !e.relatedTarget.classList.contains("search-result-button"))
    ) {
      this.toggleResults("", false);
    }
  };

  // Enable/disable the close button
  toggleClearButton = (isVisible) => {
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
  getResults = (term, n) => {
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
  toggleResults = (term, isVisible) => {
    if (isVisible) {
      // Clear search bar results
      this.toggleResults("", false);

      // Get 5 most relevant search results
      let searchResults = this.getResults(term, 5);

      // For each result, make a button
      searchResults.forEach((result) => {
        const li = document.createElement("li");
        const button = document.createElement("BUTTON");

        button.setAttribute("class", "search-result-button highlight-onselect");
        button.appendChild(document.createTextNode(result.name)); // Set button text to location name

        // When button is clicked, update information panel with location information, enable information panel, and disable search bar results
        button.onclick = () => {
          this.informationPanel.update(result);
          this.informationPanel.toggle(true);

          this.toggleResults("", false);
          this.toggleClearButton(true); // Enable the close button

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
}

export { SearchBar };
