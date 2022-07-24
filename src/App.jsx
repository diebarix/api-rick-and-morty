
import "./App.css";
import Character from "./components/Character";
import CharacterList from "./components/CharacterList";

function App() {


	return (
		<div className="bg-dark text-white">
			<h1 className="text-center display-1 py-4">Rick and Morty api</h1>
      <Character/>
      <CharacterList/>
		</div>
	);
}

export default App;
