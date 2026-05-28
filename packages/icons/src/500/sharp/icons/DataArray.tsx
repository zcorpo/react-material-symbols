import type { SVGProps, JSX } from 'react'

export default function DataArray({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M596.41-154.02v-67.89h141.68v-516.18H596.41v-68.13h209.81v652.2H596.41Zm-442.39 0v-652.2h209.57v68.13H221.91v516.18h141.68v67.89H154.02Z" />
    </svg>
  )
}
