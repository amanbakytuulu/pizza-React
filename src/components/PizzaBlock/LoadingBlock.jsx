import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="124" cy="124" r="124" /> 
    <rect x="0" y="275" rx="0" ry="0" width="275" height="24" /> 
    <rect x="0" y="326" rx="7" ry="7" width="280" height="71" /> 
    <rect x="0" y="425" rx="6" ry="6" width="90" height="26" /> 
    <rect x="135" y="419" rx="22" ry="22" width="152" height="43" />
  </ContentLoader>
)

export default LoadingBlock;