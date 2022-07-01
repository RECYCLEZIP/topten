import React, { useEffect, useState } from "react";

import PrologueBubble from "./PrologueBubble";
import PrologueAsk from "./PrologueAsk";
import PrologueStep from "./PrologueStep";
import PrologueBinMap from "./PrologueBinMap";
import PrologueQuiz from "./PrologueQuiz";
import PrologueEnd from "./PrologueEnd";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";

function Prologue() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const targets = document.querySelectorAll(".fade-class");

    const options = { root: null, threshold: 0, rootMargin: "0px" };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
          container.classList.add("fade-in");
        } else {
          container.classList.remove("fade-in");
        }
      });
    }, options);

    targets.forEach((target) => {
      observer.observe(target);
    });
  }, []);

  // useEffect(() => {
  //   setTimeout(() => setLoading(true), 1);
  // }, []);

  // if (!loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <Helmet>
        <title>분리수ZIP - 프롤로그</title>
        <meta
          name="description"
          content="AI가 분류해주는 분리수거 서비스 프롤로그"
        />
        <link rel="canonical" href="/prologue" />
      </Helmet>
      <PrologueBubble />
      <PrologueAsk />
      <PrologueStep />
      <PrologueBinMap />
      <PrologueQuiz />
      <PrologueEnd />
    </>
  );
}

export default Prologue;
