import { Droppable } from "react-beautiful-dnd";
import TrashImg from "./TrashImg";
import { img } from "../../assets/imgImport";

function TrashZone({
  data,
  index,
}: {
  data: { type: string; img: string };
  index: number;
}) {
  return (
    <Droppable droppableId={data.type}>
      {(provided) => {
        return (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <TrashImg data={data} index={index} />
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
}

export default TrashZone;
