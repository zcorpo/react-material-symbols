import type { SVGProps } from 'react'

export default function ChatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-74.02v-812.2h812.2v652.2h-652.2l-160 160ZM240-399h313v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60Z" />
    </svg>
  )
}
