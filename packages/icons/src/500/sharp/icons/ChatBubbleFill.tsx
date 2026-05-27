import type { SVGProps, JSX } from 'react'

export default function ChatBubbleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-74.02v-812.2h812.2v652.2h-652.2l-160 160Z" />
    </svg>
  )
}
