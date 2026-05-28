import type { SVGProps, JSX } from 'react'

export default function VideoStable({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm22-22h652v-492H154v492Zm529 0 93-356-497-136-94 353 498 139Zm-16-28L212-387l83-312 455 124-83 313Zm-513 28v-492 492Z" />
    </svg>
  )
}
