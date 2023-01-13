import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)" fill="#fff" stroke="#79B0B0">
      <path d="M1.604.5H8.48c.609 0 1.104.496 1.104 1.104V5.73c0 .609-.495 1.104-1.104 1.104H1.604A1.106 1.106 0 0 1 .5 5.73V1.604C.5.996.996.5 1.604.5ZM1.604 9.667H8.48c.609 0 1.104.495 1.104 1.104v9.625c0 .608-.495 1.104-1.104 1.104H1.604A1.106 1.106 0 0 1 .5 20.396V10.77c0-.609.496-1.104 1.104-1.104ZM13.52 15.167h6.876c.608 0 1.104.495 1.104 1.104v4.125c0 .608-.496 1.104-1.104 1.104H13.52a1.106 1.106 0 0 1-1.105-1.104V16.27c0-.609.496-1.104 1.105-1.104ZM19.896.5h.5c.608 0 1.104.496 1.104 1.104v9.625c0 .609-.496 1.104-1.104 1.104H13.52a1.106 1.106 0 0 1-1.105-1.104V1.604c0-.608.496-1.104 1.105-1.104h6.375Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
)

const HomeIcon = memo(SvgComponent)
export default HomeIcon
