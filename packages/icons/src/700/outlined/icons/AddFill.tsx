import type { SVGProps, JSX } from 'react'

export default function AddFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M433-433H175v-94h258v-259h94v259h259v94H527v258h-94v-258Z" />
    </svg>
  )
}
