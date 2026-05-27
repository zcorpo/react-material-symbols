import type { SVGProps, JSX } from 'react'

export default function HorizontalSplit({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-194.5v-320h732.2v320h-732.2Zm0-377.37V-640h732.2v68.13h-732.2Zm0-125.5v-68.13h732.2v68.13h-732.2Z" />
    </svg>
  )
}
