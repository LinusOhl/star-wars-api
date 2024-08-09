import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import FilmsPage from "./pages/FilmsPage";
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import PeoplePage from "./pages/PeoplePage";
import PersonPage from "./pages/PersonPage";
import PlanetsPage from "./pages/PlanetsPage";
import PlanetPage from "./pages/PlanetPage";
import SpeciesPage from "./pages/SpeciesPage";
import SpeciePage from "./pages/SpeciePage";
import StarshipsPage from "./pages/StarshipsPage";
import StarshipPage from "./pages/StarshipPage";
import VehiclesPage from "./pages/VehiclesPage";
import VehiclePage from "./pages/VehiclePage";
import "./assets/scss/App.scss";

const App = () => {
  return (
    <div id="App">
      <Navigation />

      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/films">
            <Route path="" element={<FilmsPage />} />
            <Route path=":id" element={<FilmPage />} />
          </Route>

          <Route path="/people">
            <Route path="" element={<PeoplePage />} />
            <Route path=":id" element={<PersonPage />} />
          </Route>

          <Route path="/planets">
            <Route path="" element={<PlanetsPage />} />
            <Route path=":id" element={<PlanetPage />} />
          </Route>

          <Route path="/species">
            <Route path="" element={<SpeciesPage />} />
            <Route path=":id" element={<SpeciePage />} />
          </Route>

          <Route path="/starships">
            <Route path="" element={<StarshipsPage />} />
            <Route path=":id" element={<StarshipPage />} />
          </Route>

          <Route path="/vehicles">
            <Route path="" element={<VehiclesPage />} />
            <Route path=":id" element={<VehiclePage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
