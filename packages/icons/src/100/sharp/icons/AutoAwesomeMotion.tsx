import type { SVGProps } from 'react'

export default function AutoAwesomeMotion({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M428-132v-400h400v400H428Zm22-22h356v-356H450v356ZM280-264v-416h416v22H302v394h-22ZM132-412v-416h416v22H154v394h-22Zm318 258v-356 356Z" />
    </svg>
  )
}
