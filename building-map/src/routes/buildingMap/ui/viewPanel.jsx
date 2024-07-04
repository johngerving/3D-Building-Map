import SearchBar from "./searchBar.jsx";
import SideBar from "./sideBar.jsx";

import { useOutletContext } from "react-router-dom";

// Contains both search bar and sidebar
export function ViewPanel() {
  // Get props from outlet context
  const [
    floors,
    locations,
    selectedLocation,
    setSelectedLocation,
    setSelectedFloor,
  ] = useOutletContext();
  return (
    <>
      <SearchBar
        locations={locations}
        floors={floors}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        setSelectedFloor={setSelectedFloor}
      />
      <SideBar selectedLocation={selectedLocation} />
    </>
  );
}
