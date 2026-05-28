import type { SVGProps, JSX } from 'react'

export default function GroupedBarChart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-480h140v480H160Zm210 0v-280h140v280H370Zm290 0v-640h140v640H660Z" />
    </svg>
  )
}
