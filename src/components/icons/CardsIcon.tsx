import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)" fill="#489494">
      <path d="M18.333 3.884v-2.05A1.836 1.836 0 0 0 16.5 0H1.833A1.836 1.836 0 0 0 0 1.833V9.9a1.83 1.83 0 0 0 1.644 1.814l1.378 3.578a1.834 1.834 0 0 0 2.37 1.052L14 13.028a5.3 5.3 0 0 0 .457 4.707l.21.337v3.561c0 .203.165.367.367.367h6.6a.367.367 0 0 0 .367-.367V9.53a4.799 4.799 0 0 0-1.405-3.38l-2.262-2.266Zm0 2.193 1.113 2.89a1.1 1.1 0 0 1-.631 1.42l-.636.246c.101-.23.154-.48.154-.733V6.077ZM.733 9.9V1.833a1.1 1.1 0 0 1 1.1-1.1H16.5a1.1 1.1 0 0 1 1.1 1.1v2.33h-.003l.003.01V9.9a1.114 1.114 0 0 1-.025.19l-3.359-3.36a1.956 1.956 0 0 0-2.823 2.706L12.825 11H1.833a1.1 1.1 0 0 1-1.1-1.1Zm4.698 1.833-2.608 1.004-.385-1.004H5.43Zm-.302 3.926a1.1 1.1 0 0 1-1.422-.63l-.619-1.609 4.377-1.687v-.002h6.032l.477.52-8.845 3.409Zm16.138 5.608H15.4v-2.934h5.867v2.934Zm0-3.667h-6.03l-.16-.254a4.573 4.573 0 0 1-.092-4.696.366.366 0 0 0-.048-.43l-3.005-3.278a1.223 1.223 0 0 1 1.766-1.691l5.843 5.842.518-.519-1.356-1.357.376-.146a1.833 1.833 0 0 0 1.051-2.369l-1.241-3.223 1.188 1.19a4.06 4.06 0 0 1 1.19 2.861v8.07Z" />
      <path d="M4.18 5.133a.953.953 0 0 0 .953-.953V2.42a.953.953 0 0 0-.953-.953H2.42a.953.953 0 0 0-.953.953v1.76c0 .527.427.953.953.953h1.76ZM2.2 4.18v-.513h.733v-.734H2.2V2.42a.22.22 0 0 1 .22-.22h1.76a.22.22 0 0 1 .22.22v.513h-.733v.734H4.4v.513a.22.22 0 0 1-.22.22H2.42a.22.22 0 0 1-.22-.22ZM1.833 6.233H3.3v.734H1.834v-.734ZM1.833 8.433H3.3v.734H1.834v-.734ZM8.433 8.433H9.9v.734H8.433v-.734ZM4.033 6.233H5.5v.734H4.033v-.734ZM6.233 6.233H7.7v.734H6.233v-.734ZM8.433 6.233H9.9v.734H8.433v-.734ZM15.4 1.833h.733v1.1H15.4v-1.1ZM13.933 1.833h.733v1.1h-.733v-1.1ZM12.467 1.833h.733v1.1h-.733v-1.1ZM11 1.833h.733v1.1H11v-1.1ZM16.133 19.067h.734v.733h-.734v-.733Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
)

const CardsIcon = memo(SvgComponent)
export default CardsIcon