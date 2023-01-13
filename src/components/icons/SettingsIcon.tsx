import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)" fill="#79B0B0">
      <path d="M20.565 8.609h-1.79a8.092 8.092 0 0 0-.586-1.415l1.265-1.265c.27-.27.42-.631.42-1.015 0-.384-.15-.745-.42-1.015l-1.353-1.354c-.541-.54-1.488-.542-2.03 0L14.806 3.81a8.116 8.116 0 0 0-1.415-.585v-1.79C13.391.644 12.748 0 11.957 0h-1.914C9.253 0 8.61.644 8.61 1.435v1.79c-.49.151-.964.347-1.415.586L5.929 2.546c-.56-.56-1.47-.56-2.03 0L2.545 3.899c-.56.56-.56 1.47 0 2.03L3.81 7.194c-.239.451-.435.925-.586 1.415h-1.79C.645 8.61 0 9.253 0 10.044v1.913c0 .79.644 1.434 1.435 1.434h1.79c.151.49.347.964.586 1.415l-1.265 1.266c-.56.559-.56 1.47 0 2.03l1.353 1.353c.56.56 1.47.56 2.03 0l1.265-1.265c.451.239.925.435 1.415.586v1.79c0 .79.644 1.434 1.435 1.434h1.913c.791 0 1.435-.644 1.435-1.435v-1.79c.49-.151.964-.347 1.415-.586l1.264 1.266c.543.542 1.49.54 2.03 0l1.354-1.354c.27-.27.42-.631.42-1.015 0-.384-.15-.744-.42-1.014l-1.265-1.266c.238-.45.434-.924.585-1.415h1.79c.791 0 1.435-.643 1.435-1.434v-1.914c0-.79-.644-1.434-1.435-1.434Zm.479 3.348a.479.479 0 0 1-.479.478h-2.152a.478.478 0 0 0-.463.358 7.19 7.19 0 0 1-.767 1.852.479.479 0 0 0 .074.581l1.52 1.522a.475.475 0 0 1 0 .677l-1.353 1.353a.492.492 0 0 1-.677 0l-1.521-1.52a.479.479 0 0 0-.582-.074 7.164 7.164 0 0 1-1.851.767.478.478 0 0 0-.358.462v2.152a.479.479 0 0 1-.479.479h-1.912a.48.48 0 0 1-.479-.479v-2.152a.478.478 0 0 0-.358-.463 7.168 7.168 0 0 1-1.852-.767.478.478 0 0 0-.582.074l-1.52 1.521a.48.48 0 0 1-.678 0l-1.353-1.354a.479.479 0 0 1 0-.677l1.52-1.52a.478.478 0 0 0 .074-.582 7.18 7.18 0 0 1-.767-1.851.477.477 0 0 0-.462-.36H1.435a.48.48 0 0 1-.478-.477v-1.914a.48.48 0 0 1 .478-.478h2.152a.478.478 0 0 0 .463-.358 7.17 7.17 0 0 1 .767-1.852.478.478 0 0 0-.074-.581L3.222 5.253a.48.48 0 0 1 0-.677l1.354-1.354a.48.48 0 0 1 .677 0l1.52 1.52a.477.477 0 0 0 .582.075 7.18 7.18 0 0 1 1.852-.767.478.478 0 0 0 .358-.463V1.435a.48.48 0 0 1 .479-.478h1.912c.264 0 .479.214.479.478v2.152c0 .218.148.408.358.463a7.162 7.162 0 0 1 1.852.767.478.478 0 0 0 .581-.074l1.521-1.521c.18-.18.498-.18.677 0l1.354 1.354a.476.476 0 0 1 0 .677l-1.52 1.52a.478.478 0 0 0-.075.582 7.18 7.18 0 0 1 .768 1.852c.054.21.244.358.462.358h2.152c.264 0 .479.215.479.479v1.912Z" />
      <path d="M11 6.696A4.31 4.31 0 0 0 6.696 11 4.31 4.31 0 0 0 11 15.304 4.31 4.31 0 0 0 15.305 11 4.31 4.31 0 0 0 11 6.696Zm0 7.652A3.351 3.351 0 0 1 7.652 11 3.351 3.351 0 0 1 11 7.652 3.352 3.352 0 0 1 14.348 11 3.352 3.352 0 0 1 11 14.348Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
)

const SettingsIcon = memo(SvgComponent)
export default SettingsIcon
