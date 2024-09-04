import { GameState } from "./enums";

export interface Tile {
	state: "FREE" | number; // Number represents a player number
	row: number;
	col: number;
}

export interface Game {
	state: GameState;
	gameStateMessage: string;
	players: number[];
	activePlayer: number;
	board: Tile[][];
}
