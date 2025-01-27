import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ArtworksList from "./components/ArtworksList";
import ArtworkDetails from "./components/ArtworkDetails";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

const App = () => (
  <div className="row justify-content-center align-items-center">
    <Header />
    <div className="row justify-content-center align-items-center">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
        <Route path="/artworks" element={<ArtworksList />} />
        <Route path="/artworks/:source/:id" element={<ArtworkDetails />} />
      </Routes>
    </div>
  </div>
);

export default App;
