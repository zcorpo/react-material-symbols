import type { SVGProps } from 'react'

export default function SplitscreenLandscape({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M527-328h185v-304H527v304Zm-279 0h185v-304H248v304ZM132-212v-536h696v536H132Zm674-22v-492H154v492h652ZM154-726v492-492Z" />
    </svg>
  )
}
