import type { SVGProps, JSX } from 'react'

export default function AutoAwesomeMotionFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M428-132v-400h400v400H428ZM280-264v-416h416v22H302v394h-22ZM132-412v-416h416v22H154v394h-22Z" />
    </svg>
  )
}
