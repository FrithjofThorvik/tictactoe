"use client";

import { GameState } from "@/types/enums";
import { Game, Tile } from "@/types/types";
import { createContext, useContext, useEffect, useState } from "react";

interface TicTacToeContextProps {
	game: Game | null;
	startGame: VoidFunction;
	selectTile: (tile: Tile) => void;
}

const TicTacToeContext = createContext<TicTacToeContextProps>(
	{} as TicTacToeContextProps
);

export default function TicTacToeContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [game, setGame] = useState<Game | null>(null);

	// Creates a new game board, and sets it to the game state
	const startGame = (size = 3, playerCount = 2) => {
		let board: Tile[][] = [];
		for (let rowIndex = 0; rowIndex < size; rowIndex++) {
			let row: Tile[] = [];
			for (let colIndex = 0; colIndex < size; colIndex++) {
				row.push({ state: "FREE", row: rowIndex, col: colIndex });
			}
			board.push(row);
		}
		const players = Array.from({ length: playerCount }, (_, i) => i + 1) ?? [
			1, 2,
		];
		setGame({
			players,
			activePlayer: players[0],
			state: GameState.IN_PROGRESS,
			gameStateMessage: `Player ${players[0]} turn`,
			board,
		});
	};

	// Update the state of a tile, and set the new game state
	const selectTile = (tile: Tile) => {
		if (!game) return;
		if (game.state === GameState.FINISHED) return;
		if (tile.state !== "FREE") return;

		const newGame = {
			...game,
			activePlayer:
				game.activePlayer === game.players[0]
					? game.players[1]
					: game.players[0],
			board: game.board.map((row) =>
				row.map((t) => (t === tile ? { ...t, state: game.activePlayer } : t))
			),
		};
		setGame(newGame);
	};

	// Evaluate the game to check for a winner or a tie
	const evaluateGame = (game: Game) => {
		const size = game.board.length;

		// Check rows and columns
		for (let i = 0; i < size; i++) {
			if (
				game.board[i][0].state !== "FREE" &&
				game.board[i].every((tile) => tile.state === game.board[i][0].state)
			) {
				setGame({
					...game,
					state: GameState.FINISHED,
					gameStateMessage: `Player ${game.board[i][0].state} wins!`,
				});
				return;
			}
			if (
				game.board[0][i].state !== "FREE" &&
				game.board.every((row) => row[i].state === game.board[0][i].state)
			) {
				setGame({
					...game,
					state: GameState.FINISHED,
					gameStateMessage: `Player ${game.board[0][i].state} wins!`,
				});
				return;
			}
		}

		// Check diagonals
		if (
			game.board[0][0].state !== "FREE" &&
			game.board.every((row, idx) => row[idx].state === game.board[0][0].state)
		) {
			setGame({
				...game,
				state: GameState.FINISHED,
				gameStateMessage: `Player ${game.board[0][0].state} wins!`,
			});
			return;
		}
		if (
			game.board[0][size - 1].state !== "FREE" &&
			game.board.every(
				(row, idx) =>
					row[size - 1 - idx].state === game.board[0][size - 1].state
			)
		) {
			setGame({
				...game,
				state: GameState.FINISHED,
				gameStateMessage: `Player ${game.board[0][size - 1].state} wins!`,
			});
			return;
		}

		// Check for tie
		if (game.board.every((row) => row.every((tile) => tile.state !== "FREE"))) {
			setGame({
				...game,
				state: GameState.FINISHED,
				gameStateMessage: `It's a tie!`,
			});
			return;
		}
	};

	// Evaluate the game when the game state changes
	useEffect(() => {
		if (!game) return;
		evaluateGame(game);
	}, [game?.board]);

	return (
		<TicTacToeContext.Provider value={{ game, startGame, selectTile }}>
			{children}
		</TicTacToeContext.Provider>
	);
}

export const useTicTacToeContext = () => useContext(TicTacToeContext);
