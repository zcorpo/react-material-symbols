import type { SVGProps, JSX } from 'react'

export default function FullscreenPortraitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M282.15-202.15h395.7v-555.7h-395.7v555.7ZM806.22-74.02h-652.2v-812.2h652.2v812.2Z" />
    </svg>
  )
}
