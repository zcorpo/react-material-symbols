import type { SVGProps } from 'react'

export default function SplitscreenPortraitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M298.46-218.46h363.08v-225H298.46v225Zm0-298.08h363.08v-225H298.46v225ZM180-100v-760h600v760H180Z" />
    </svg>
  )
}
