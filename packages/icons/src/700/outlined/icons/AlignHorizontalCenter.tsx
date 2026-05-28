import type { SVGProps, JSX } from 'react'

export default function AlignHorizontalCenter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M433-55v-212H215v-134h218v-158H95v-134h338v-213h94v213h339v134H527v158h219v134H527v212h-94Z" />
    </svg>
  )
}
