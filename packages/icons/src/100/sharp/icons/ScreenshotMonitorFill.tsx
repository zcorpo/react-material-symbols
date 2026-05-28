import type { SVGProps, JSX } from 'react'

export default function ScreenshotMonitorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M626-336h118v-118h-22v96h-96v22ZM216-586h22v-96h96v-22H216v118Zm159 414v-80H132v-536h696v536H585v80H375Z" />
    </svg>
  )
}
