import type { SVGProps, JSX } from 'react'

export default function ForumFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-240v-140h500v-340h140v639L721-240H240ZM80-280v-600h600v440H240L80-280Z" />
    </svg>
  )
}
