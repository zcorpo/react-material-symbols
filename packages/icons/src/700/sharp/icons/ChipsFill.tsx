import type { SVGProps } from 'react'

export default function ChipsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M247-441h466v-82H247v82ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
