import type { SVGProps, JSX } from 'react'

export default function CallToActionFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M265-304h430v-64H265v64Zm-133 92v-536h696v536H132Z" />
    </svg>
  )
}
