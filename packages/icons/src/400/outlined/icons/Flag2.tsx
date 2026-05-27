import type { SVGProps, JSX } from 'react'

export default function Flag2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-80v-760h640l-91 194 91 194H260v372h-60Zm60-432h485l-63-134 63-134H260v268Zm0 0v-268 268Z" />
    </svg>
  )
}
