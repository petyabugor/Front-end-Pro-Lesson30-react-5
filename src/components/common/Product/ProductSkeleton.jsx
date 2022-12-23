import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={200}
    height={270}
    viewBox="0 0 200 270"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="14" y="10" rx="14" ry="14" width="180" height="150" /> 
    <rect x="13" y="183" rx="0" ry="0" width="180" height="50" /> 
    <rect x="70" y="243" rx="0" ry="0" width="70" height="25" /> 
    <rect x="0" y="0" rx="13" ry="13" width="200" height="270" /> 
    <rect x="62" y="79" rx="0" ry="0" width="91" height="89" />
  </ContentLoader>
)

export default ProductSkeleton