import type { SVGProps } from 'react'

export default function AlignEndFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-74.02v-68.13h812.2v68.13H74.02Zm211.91-451.91v-108.14h388.14v108.14H285.93Zm0 240v-108.14h388.14v108.14H285.93Z" />
    </svg>
  )
}
