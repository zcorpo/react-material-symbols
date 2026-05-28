import type { SVGProps, JSX } from 'react'

export default function Science({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-120q-42 0-59.5-39t11.5-71l248-280v-270h-82v-60h380v60h-82v270l248 280q29 32 11.5 71T788-120H172Zm-12-60h640L528-488v-292h-96v292L160-180Zm318-300Z" />
    </svg>
  )
}
