import { Droppable } from "react-beautiful-dnd";
import TrashImg from "./TrashImg";

function TrashZone({
  data,
  index,
  visibility,
}: {
  data: { type: string; img: string };
  index: number;
  visibility: string[];
}) {
  return (
    <Droppable droppableId={data.type} type={data.type}>
      {(provided, snapshot) => {
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
