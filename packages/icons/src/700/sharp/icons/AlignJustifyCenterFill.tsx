import type { SVGProps } from 'react'

export default function AlignJustifyCenterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M433-55v-851h94v851h-94Zm124-218v-414h135v414H557Zm-289 0v-414h135v414H268Z" />
    </svg>
  )
}
