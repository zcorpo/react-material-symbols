import type { SVGProps } from 'react'

export default function PageMenuIosFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-65v-93h517v93H95Zm0-193v-94h771v94H95Zm0-194v-444h771v444H95Z" />
    </svg>
  )
}
