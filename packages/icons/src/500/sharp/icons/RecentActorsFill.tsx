import type { SVGProps, JSX } from 'react'

export default function RecentActorsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M34.5-194.02v-572.2h572.2v572.2H34.5Zm68.13-120.13q49-32 104.42-48 55.43-16 113.43-16 58 0 113.42 16 55.43 16 104.43 48v-383.7h-435.7v383.7ZM241.98-461.5q-32.5-32.5-32.5-78.5t32.5-78.5q32.5-32.5 78.5-32.5t78.5 32.5q32.5 32.5 32.5 78.5t-32.5 78.5q-32.5 32.5-78.5 32.5t-78.5-32.5Zm461.37 267.48v-572.2h62.87v572.2h-62.87Zm159.28 0v-572.2h62.87v572.2h-62.87Z" />
    </svg>
  )
}
