import type { SVGProps } from 'react'

export default function Hov({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-74.02 234.02-480 480-886.22 726.22-480 480-74.02Zm0-131.35L646.17-480 480-754.87 314.07-480 480-205.37ZM480-480Z" />
    </svg>
  )
}
