import type { SVGProps, JSX } from 'react'

export default function ViewColumnFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M111.87-194.02v-572.2h222.87v572.2H111.87Zm256.7 0v-572.2h223.1v572.2h-223.1Zm256.69 0v-572.2h223.11v572.2H625.26Z" />
    </svg>
  )
}
