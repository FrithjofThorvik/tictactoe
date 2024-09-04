"use client";

import Board from "@/components/Board";
import Tile from "@/components/Tile";
import TilePreview from "@/components/TilePreview";
import { useTicTacToeContext } from "@/contexts/TicTacToeContext";

function TickTacToe() {
	const { game } = useTicTacToeContext();

	return (
		<div className="h-screen w-screen bg-beige-3 flex flex-row">
			{/*Main content */}
			<div className="w-2/3">
				<Board />
			</div>

			{/* Legend */}
			<div className="flex flex-col justify-center items-center w-1/3 gap-16">
				<div className="flex flex-col gap-10">
					<TilePreview tile={{ state: 1, col: 0, row: 0 }} />
					<TilePreview tile={{ state: 2, col: 0, row: 0 }} />
					<TilePreview tile={{ state: "FREE", col: 0, row: 0 }} />
				</div>
			</div>
		</div>
	);
}

export default TickTacToe;
