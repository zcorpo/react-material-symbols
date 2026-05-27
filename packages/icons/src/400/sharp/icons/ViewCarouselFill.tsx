import type { SVGProps } from 'react'

export default function ViewCarouselFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-285v-390h140v390H80Zm200 85v-560h400v560H280Zm460-85v-390h140v390H740Z" />
    </svg>
  )
}
