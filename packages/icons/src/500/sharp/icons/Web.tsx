import type { SVGProps, JSX } from 'react'

export default function Web({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02v-652.2h812.2v652.2H74.02Zm68.13-68.13h456.7v-163h-456.7v163Zm516.7 0h159v-386h-159v386Zm-516.7-223h456.7v-163h-456.7v163Z" />
    </svg>
  )
}
