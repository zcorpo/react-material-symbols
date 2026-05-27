import type { SVGProps } from 'react'

export default function SkipNext({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M654-312v-336h22v336h-22Zm-370 0v-336l248 168-248 168Zm22-168Zm0 126 188-126-188-127v253Z" />
    </svg>
  )
}
