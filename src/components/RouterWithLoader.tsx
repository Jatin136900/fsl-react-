import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import CoursePage from "@/pages/CoursePage";
import Loader from "./Loader";

export default function RouterWithLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // show loader for 2s on initial load and on route changes
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <div className={loading ? "pointer-events-none" : ""}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses/:slug" element={<CoursePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
