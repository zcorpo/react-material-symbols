import type { SVGProps, JSX } from 'react'

export default function FormatTextOverflowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135.13-150.39v-659.22h79.22v659.22h-79.22Zm540.26-180.57-56.13-55.56 53.87-53.87H314.35v-79.22h358.78l-53.87-53.87 56.13-55.56L825.44-480 675.39-330.96ZM483.61-150.39v-190h79.22v190h-79.22Zm0-469.22v-190h79.22v190h-79.22Z" />
    </svg>
  )
}
