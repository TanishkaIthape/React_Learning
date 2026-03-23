import "./App.css";
import Navbar from "./components/Navbar";
import Tile from "./components/Tile";

function App() {
  return (
    <>
      <Navbar />

      <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
        <Tile
          title="Mount Fuji"
          img="/src/assets/mount_fuji.jpg"
          text="This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer."
          link="https://maps.app.goo.gl/46i5JJp8rD9knViD8"
        />
        <Tile
          title="Seoul Tower"
          img="/src/assets/seoul_tower.jpg"
          text="This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer."
          link="https://maps.app.goo.gl/gPVu5XbNA61dVs278"
        />
        <Tile
          title="Los Angeles"
          img="/src/assets/LA.jpg"
          text="This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer."
          link="https://maps.app.goo.gl/etPvULiGauRv6kHq9"
        />
      </div>
    </>
  );
}

export default App;
