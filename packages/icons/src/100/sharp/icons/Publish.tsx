import type { SVGProps, JSX } from 'react'

export default function Publish({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-212v-366l-95 95-16-15 122-122 122 122-16 15-95-95v366h-22ZM212-597v-151h536v151h-22v-129H234v129h-22Z" />
    </svg>
  )
}
