import type { SVGProps, JSX } from 'react'

export default function CancelPresentation({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m371-355 109-109 109 109 16-16-109-109 109-109-16-16-109 109-109-109-16 16 109 109-109 109 16 16ZM132-212v-536h696v536H132Zm22-22h652v-492H154v492Zm0 0v-492 492Z" />
    </svg>
  )
}
