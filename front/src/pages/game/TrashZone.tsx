import { Droppable } from "react-beautiful-dnd";
import { GameDataType } from "../../types/Game";
import TrashImg from "./TrashImg";

// Droppable trash zone component
function TrashZone({
  data,
  index,
  visibility,
}: {
  data: GameDataType;
  index: number;
  visibility: string[];
}) {
  return (
    <Droppable droppableId={data.category} type={data.category}>
      {(provided) => {
        return (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <TrashImg data={data} index={index} visibility={visibility} />
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
}

export default TrashZone;
