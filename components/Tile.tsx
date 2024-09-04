"use client";

import { useTicTacToeContext } from "@/contexts/TicTacToeContext";
import { Tile as TileType } from "@/types/types";

interface TileProps {
	tile: TileType;
	disabled?: boolean;
}

const Tile = ({ tile, disabled }: TileProps) => {
	const { selectTile } = useTicTacToeContext();

	const renderTileState = () => {
		switch (tile.state) {
			case "FREE": {
				return (
					<div
						className="flex justify-center items-center h-full w-full rounded-[30px] border-[20px] border-beige-1 bg-beige-1 hover:cursor-pointer"
						onClick={() => !disabled && selectTile(tile)}
					/>
				);
			}
			case 1: {
				return (
					<div className="flex justify-center items-center h-full w-full border-[20px] border-purple-5" />
				);
			}
			case 2: {
				return (
					<div className="flex justify-center items-center h-full w-full rounded-full border-[20px] border-green-3" />
				);
			}
		}
	};

	return renderTileState();
};
export default Tile;
