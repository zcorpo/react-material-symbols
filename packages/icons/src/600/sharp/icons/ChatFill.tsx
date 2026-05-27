import type { SVGProps, JSX } from 'react'

export default function ChatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-65.87V-894.7H894.7v668.83H225.87l-160 160ZM240-399h313v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60Z" />
    </svg>
  )
}
