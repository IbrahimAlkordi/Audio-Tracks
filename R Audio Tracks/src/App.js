import React, {  Fragment } from "react";

import Header from "./components/Layout/Header";
import AvailableAlbums from "./components/Albums/AvailableAlbums";

function App() {


  return (
   <Fragment>
      <Header />
      <main>
      <AvailableAlbums></AvailableAlbums>
      </main>
  </Fragment>
  );
}

export default App;
