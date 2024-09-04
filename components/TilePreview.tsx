import { Tile as TileType } from "@/types/types";
import Tile from "./Tile";

interface TilePreviewProps {
	tile: TileType;
}

const TilePreview = ({ tile }: TilePreviewProps) => (
	<div className="flex flex-row gap-4 items-center">
		<div className="w-[120px] h-[120px]">
			<Tile tile={tile} disabled />
		</div>
		<p className="text-black">
			{tile.state === "FREE" ? "FREE" : `Player ${tile.state}`}
		</p>
	</div>
);
export default TilePreview;
