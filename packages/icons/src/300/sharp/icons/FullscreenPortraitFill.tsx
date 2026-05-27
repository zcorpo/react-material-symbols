import type { SVGProps } from 'react'

export default function FullscreenPortraitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M298.46-218.46h363.08v-523.08H298.46v523.08ZM780-100H180v-760h600v760Z" />
    </svg>
  )
}
