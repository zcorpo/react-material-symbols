import type { SVGProps, JSX } from 'react'

export default function OpenJamFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-144.62V-190h242.69v-352.08l84.16 84.16 34.84-34.85L480-634.46 338.31-492.77l34.84 34.85 84.16-84.16v196.39H100V-820h760v474.31H577.31V-190H700v45.38H260Z" />
    </svg>
  )
}
