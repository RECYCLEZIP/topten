import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top component
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/category/trash") return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
