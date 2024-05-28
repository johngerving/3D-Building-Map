import { gsap } from "gsap";

class InformationPanel {
  constructor() {
    this.information_panel = document.getElementById("information-panel");

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

    // Disable information panel by default
    this.information_panel.style.display = "none";
  }

  // Given location data, update the information panel
  update(location) {
    // If there is no image provided, disable the image in the information panel
    if (!location.img) {
      this.information_panel_img.style.display = "none";
    }

    // If the location has a name,
    if (location.name) {
      this.information_panel_name.textContent = location.name; // Set title in information panel to location name

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
  }

  // Enable/disable the information panel
  toggle(isVisible) {
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
  }
}

export { InformationPanel };
