import type { SVGProps, JSX } from 'react'

export default function FormatTextClipFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M216-186v-588h22v588h-22Zm506 0v-283H364v-22h358v-283h22v588h-22Z" />
    </svg>
  )
}
