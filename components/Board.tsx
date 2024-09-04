"use client";

import { useTicTacToeContext } from "@/contexts/TicTacToeContext";
import Tile from "./Tile";
import Button from "./Button";

const Board = () => {
	const { game, startGame } = useTicTacToeContext();

	return (
		<div className="flex flex-col gap-10 w-full items-center justify-center h-full">
			{/* Game State */}
			<div className="flex flex-col gap-2 justify-center items-center">
				{game ? (
					<>
						<h1 className="font-bold text-3xl text-black">
							{game.gameStateMessage}
						</h1>
						{game.state === "FINISHED" && (
							<Button text="Start new game" onClick={() => startGame()} />
						)}
					</>
				) : (
					<>
						<h1 className="font-bold text-3xl text-black">
							Welcome to Tic Tac Toe!
						</h1>
						<Button text="Start Game" onClick={() => startGame()} />
					</>
				)}
			</div>

			{/* Board */}
			<div className="w-[732px] h-[732px] rounded-lg bg-beige-2 p-10">
				{game ? (
					<div className="flex flex-col justify-between items-center h-full w-full gap-20">
						{game.board.map((row, i) => (
							<div
								key={i}
								className="flex flex-row w-full justify-between items-center flex-grow gap-20"
							>
								{row.map((tile, j) => (
									<Tile key={j} tile={tile} />
								))}
							</div>
						))}
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};
export default Board;
