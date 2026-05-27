import type { SVGProps, JSX } from 'react'

export default function BookmarkAdded({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M716-605 610-711l42-43 64 64 148-149 43 43-191 191ZM480-240 200-120v-725h350v60H260v574l220-93 220 93v-334h60v425L480-240ZM260-785h290-290Z" />
    </svg>
  )
}
