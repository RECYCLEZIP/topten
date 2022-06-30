import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import { img } from "../assets/imgImport";
import {
  PageNotContainer,
  NumberText,
  DescriptionText,
  ErrorDescription,
  ErrorImg,
  BackButton,
} from "../styles/PageNotFound";

function PageNotFound() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 10);
  }, []);

  if (!loading) {
    return <></>;
  }

  return (
    <PageNotContainer>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <ErrorDescription>
        <NumberText>404</NumberText>
        <DescriptionText>페이지를 찾을 수 없습니다.</DescriptionText>
        <BackButton onClick={() => navigate("/")}>돌아가기</BackButton>
      </ErrorDescription>
      <ErrorImg src={img.error404} />
    </PageNotContainer>
  );
}

export default PageNotFound;
