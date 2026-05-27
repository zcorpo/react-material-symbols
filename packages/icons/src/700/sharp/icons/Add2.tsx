import type { SVGProps } from 'react'

export default function Add2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M433-95v-338H95v-94h338v-339h94v339h339v94H527v338h-94Z" />
    </svg>
  )
}
