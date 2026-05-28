import type { SVGProps, JSX } from 'react'

export default function CropPortrait({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-74.02v-812.2h652.2v812.2h-652.2Zm68.13-68.13h515.7v-675.7h-515.7v675.7Zm0 0v-675.7 675.7Z" />
    </svg>
  )
}
