import type { SVGProps, JSX } from 'react'

export default function TransitionPushFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M338-160v-59h82v-521h-82v-60h142v640H338Zm222 0v-640h360v640H560ZM212-330l-43-42 76-78H40v-60h205l-76-76 42-42 149 148-148 150Z" />
    </svg>
  )
}
