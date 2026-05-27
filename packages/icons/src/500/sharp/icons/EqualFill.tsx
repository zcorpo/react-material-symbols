import type { SVGProps, JSX } from 'react'

export default function EqualFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-285.93v-108.14h652.2v108.14h-652.2Zm0-280v-108.14h652.2v108.14h-652.2Z" />
    </svg>
  )
}
