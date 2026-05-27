import type { SVGProps, JSX } from 'react'

export default function OverviewKey({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M34.5-194.02v-572.2h572.2v572.2H34.5Zm68.13-68.13h435.7v-435.7h-435.7v435.7Zm600.72 68.13v-572.2h62.87v572.2h-62.87Zm159.28 0v-572.2h62.87v572.2h-62.87Zm-760-68.13v-435.7 435.7Z" />
    </svg>
  )
}
