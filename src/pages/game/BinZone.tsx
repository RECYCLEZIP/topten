import { Droppable } from "react-beautiful-dnd";

function BinZone({
  id,
  data,
}: {
  data: { type: string; img: string };
  id: string;
}) {
  return (
    <Droppable droppableId={id}>
      {(provided) => {
        return (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {/* <img src={data.img} alt="플라스틱" /> */}
            <div style={{ color: "red" }}>{data.type}</div>
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
}

export default BinZone;
