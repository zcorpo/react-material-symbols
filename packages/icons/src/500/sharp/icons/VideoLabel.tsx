import type { SVGProps } from 'react'

export default function VideoLabel({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02v-652.2h812.2v652.2H74.02Zm68.13-192.83h675.7v-391h-675.7v391Z" />
    </svg>
  )
}
