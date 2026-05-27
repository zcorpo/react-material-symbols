import type { SVGProps } from 'react'

export default function Inventory2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-55v-552H55v-299h851v299h-40v552H95Zm54-646h663v-110H149v110Zm198 299h267v-80H347v80Z" />
    </svg>
  )
}
