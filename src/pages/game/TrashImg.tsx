import { Draggable } from "react-beautiful-dnd";

function TrashImg({
  data,
  index,
}: {
  data: { type: string; img: string };
  index: number;
}) {
  return (
    <Draggable draggableId={data.type} index={index}>
      {(magic, snapshot) => {
        return (
          // <img
          //   src={data.img}
          //   ref={magic.innerRef}
          //   {...magic.draggableProps}
          //   {...magic.dragHandleProps}
          //   alt="플라스틱"
          // />
          <div
            ref={magic.innerRef}
            {...magic.draggableProps}
            {...magic.dragHandleProps}
          >
            {data.type}
          </div>
        );
      }}
    </Draggable>
  );
}

export default TrashImg;
