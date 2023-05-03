import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={60}
    viewBox="0 0 320 60"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
   
  >
    <rect x="62" y="6" rx="3" ry="3" width="95" height="16" />
    <rect x="61" y="31" rx="3" ry="3" width="142" height="9" />
    <circle cx="22" cy="24" r="22" />
    <rect x="228" y="8" rx="0" ry="0" width="23" height="21" />
  </ContentLoader>
);

export default Skeleton;
