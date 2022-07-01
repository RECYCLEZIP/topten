import { img } from "../assets/imgImport";
import { LoadingContainer, LoadingImg } from "../styles/basicStyle";

function Loading() {
  return (
    <LoadingContainer>
      <LoadingImg src={img.pageLoading} />
    </LoadingContainer>
  );
}

export default Loading;
