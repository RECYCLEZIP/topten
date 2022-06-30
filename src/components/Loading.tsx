import { img } from "../assets/imgImport";
import { LoadingContainer } from "../styles/basicStyle";

function Loading() {
  return (
    <LoadingContainer>
      <img src={img.pageLoading} alt="img" />
    </LoadingContainer>
  );
}

export default Loading;
