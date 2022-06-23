import { Droppable } from "react-beautiful-dnd";

function BinZone({
  index,
  data,
}: {
  data: { type: string; img: string };
  index: string;
}) {
  return (
    <Droppable droppableId={data.type}>
      {(provided) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ width: "30%", height: "500px" }}
          >
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
