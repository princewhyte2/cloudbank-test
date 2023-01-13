import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.033 2.672a.917.917 0 1 0-.734 1.68 8.252 8.252 0 0 1-3.3 15.815A8.253 8.253 0 0 1 7.7 4.353a.917.917 0 1 0-.734-1.68 10.086 10.086 0 0 0-6.048 9.244C.917 17.486 5.43 22 11 22c5.568 0 10.083-4.515 10.083-10.083 0-4.047-2.406-7.652-6.05-9.245Z"
      fill="#DB261B"
    />
    <path
      d="M11 10.083c.506 0 .916-.41.916-.916V.917a.917.917 0 1 0-1.833 0v8.25c0 .506.41.916.917.916Z"
      fill="#DB261B"
    />
  </svg>
)

const LogoutIcon = memo(SvgComponent)
export default LogoutIcon
