import type { SVGProps, JSX } from 'react'

export default function JamboardKioskFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M233-95v-95h200v-125H55v-551h851v551H527v125h200v95H233Z" />
    </svg>
  )
}
