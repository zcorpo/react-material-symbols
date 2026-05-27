import type { SVGProps } from 'react'

export default function VideoChatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-409h313v-127l87 87v-227l-87 87v-127H280v307ZM74.02-74.02v-812.2h812.2v652.2h-652.2l-160 160Z" />
    </svg>
  )
}
