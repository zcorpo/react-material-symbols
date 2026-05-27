import type { SVGProps, JSX } from 'react'

export default function BarChart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M660-160v-280h140v280H660Zm-250 0v-640h140v640H410Zm-250 0v-440h140v440H160Z" />
    </svg>
  )
}
