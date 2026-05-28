import type { SVGProps, JSX } from 'react'

export default function FormatSize({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M606-212v-513H407v-23h421v23H629v513h-23Zm-353 0v-318H132v-23h264v23H275v318h-22Z" />
    </svg>
  )
}
