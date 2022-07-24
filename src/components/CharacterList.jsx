import React from "react";
import { useState, useEffect } from "react";
import Character from "./Character";

function NavPage({ page, setPage }) {
	return (
		<header className="d-flex justify-content-between align-items-center py-4">
			<p className="mx-5 my-auto">Page {page}</p>
			<div>
				<button
					onClick={() => (page == 1 ? page : setPage(page - 1))}
					className="btn btn-secondary btn-sm mx-2"
				>
					Anterior
				</button>
				<button
					onClick={() => setPage(page + 1)}
					className="btn btn-primary btn-sm mx-2"
				>
					Siguiente
				</button>
			</div>
		</header>
	);
}

export default function CharacterList() {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);

	useEffect(() => {
		async function apiFetch() {
			var response = await fetch(
				`https://rickandmortyapi.com/api/character?page=${page}`
			);
			var data = await response.json();
			setLoading(false);
			setCharacters(data.results);
		}
		apiFetch();
	}, [page]);

	return (
		<div className="container">
			<NavPage page={page} setPage={setPage} />

			{loading ? (
				<h1>Loading</h1>
			) : (
				<div className="row">
					{characters.map(character => {
						return (
							<div className="col-md-4" key={character.id}>
								<Character
									/* characterp={character} */
									name={character.name}
									image={character.image}
									origin={character.origin.name}
								/>
							</div>
						);
					})}
				</div>
			)}
			<NavPage page={page} setPage={setPage} />
		</div>
	);
}
