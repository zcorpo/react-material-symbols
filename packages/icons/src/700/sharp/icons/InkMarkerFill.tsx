import type { SVGProps, JSX } from 'react'

export default function InkMarkerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m252-73-40-40-85 86-102-99 88-88-41-40 661-664 184 184L252-73Zm194-423L207-254l45 45 242-239-48-48Z" />
    </svg>
  )
}
