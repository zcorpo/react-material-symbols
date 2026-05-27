import type { SVGProps, JSX } from 'react'

export default function SplitSceneUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-114.02v-271.91h652.2v271.91h-652.2Zm-80-331.91v-68.14h80v-332.15h652.2v332.15h80v68.14H74.02Z" />
    </svg>
  )
}
