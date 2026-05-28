import type { SVGProps, JSX } from 'react'

export default function EMobiledataFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M314-274v-412h332v72H386v98h260v72H386v98h260v72H314Z" />
    </svg>
  )
}
