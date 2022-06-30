import { Droppable } from "react-beautiful-dnd";
import { BinCard, BinList } from "../../styles/gameStyles/game";
import { GameDataType } from "../../types/Game";

// Game droppable bins zone
function BinZone({ bin }: { bin: GameDataType }) {
  return (
    <Droppable droppableId={bin.category}>
      {(provided) => {
        return (
          <BinList {...provided.droppableProps} ref={provided.innerRef}>
            <BinCard image={bin.image} />
            {provided.placeholder}
          </BinList>
        );
      }}
    </Droppable>
  );
}

export default BinZone;
