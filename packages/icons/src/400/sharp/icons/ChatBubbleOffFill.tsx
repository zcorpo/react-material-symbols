import type { SVGProps, JSX } from 'react'

export default function ChatBubbleOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M819-240 178-880h702v640h-61Zm41 212L648-240H240L80-80v-729l-24-23 41-44L903-70l-43 42Z" />
    </svg>
  )
}
