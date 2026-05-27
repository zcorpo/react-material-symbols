import type { SVGProps } from 'react'

export default function CancelPresentationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m371-355 109-109 109 109 16-16-109-109 109-109-16-16-109 109-109-109-16 16 109 109-109 109 16 16ZM132-212v-536h696v536H132Z" />
    </svg>
  )
}
