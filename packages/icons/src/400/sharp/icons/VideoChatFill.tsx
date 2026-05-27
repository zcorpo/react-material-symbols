import type { SVGProps } from 'react'

export default function VideoChatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-409h313v-127l87 87v-227l-87 87v-127H280v307ZM80-80v-800h800v640H240L80-80Z" />
    </svg>
  )
}
