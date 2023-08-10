import * as React from "react"
import { SVGProps } from "react"

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#a5a1a1"
    viewBox="0 0 24 24"
    width="40px"
    height="40px"
    {...props}
  >
    <g fill="#a5a1a1">
      <path
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        opacity={0.5}
      />
      <path d="M16.807 19.011A8.46 8.46 0 0 1 12 20.5a8.46 8.46 0 0 1-4.807-1.489c-.604-.415-.862-1.205-.51-1.848C7.41 15.83 8.91 15 12 15c3.09 0 4.59.83 5.318 2.163.35.643.093 1.433-.511 1.848ZM12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </g>
  </svg>
)
export default UserIcon
