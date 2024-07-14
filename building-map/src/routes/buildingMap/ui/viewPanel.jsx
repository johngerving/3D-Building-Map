import SearchBar from "./searchBar.jsx";
import SideBar from "./sideBar.jsx";

import { useOutletContext } from "react-router-dom";

// Contains both search bar and sidebar
export function ViewPanel() {
  // Get props from outlet context
  const [
    buildingID,
    selectedFloor,
    selectedLocation,
    setSelectedLocation,
    setSelectedFloor,
  ] = useOutletContext();

  return (
    <>
      <SearchBar
        buildingID={buildingID}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        setSelectedFloor={setSelectedFloor}
      />
      <SideBar selectedLocation={selectedLocation} />
    </>
  );
}
