import type { SVGProps, JSX } from 'react'

export default function TileLargeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-114.02v-237.91H428v237.91H114.02Zm418.98 0v-237.91h313.22v237.91H533ZM114.02-456.93v-389.29h732.2v389.29h-732.2Z" />
    </svg>
  )
}
