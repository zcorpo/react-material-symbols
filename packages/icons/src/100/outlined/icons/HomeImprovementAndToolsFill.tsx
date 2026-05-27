import type { SVGProps } from 'react'

export default function HomeImprovementAndToolsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M342-828h276l-71 103v194H413v-194l-71-103Zm71 319h134v143H413v-143Zm0 165h134v123l-67 67-67-67v-123Z" />
    </svg>
  )
}
