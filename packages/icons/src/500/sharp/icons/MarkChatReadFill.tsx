import type { SVGProps, JSX } from 'react'

export default function MarkChatReadFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M702.2-151.87 562.46-291.85l47.74-47.74 92 91 177-177.24 47.73 48.98L702.2-151.87ZM74.02-74.02v-812.2h812.2v372.15H485.93v280.05H234.02l-160 160Z" />
    </svg>
  )
}
