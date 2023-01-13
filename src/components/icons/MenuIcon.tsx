import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19.167 10.816H.833a.834.834 0 0 1 0-1.667h18.334a.834.834 0 0 1 0 1.667ZM19.167 4.427H.833a.834.834 0 0 1 0-1.667h18.334a.834.834 0 0 1 0 1.667ZM19.167 17.205H.833a.834.834 0 0 1 0-1.667h18.334a.834.834 0 0 1 0 1.667Z"
      fill="#79B0B0"
    />
  </svg>
)

const MenuIcon = memo(SvgComponent)
export default MenuIcon
