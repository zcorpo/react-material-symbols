import type { SVGProps, JSX } from 'react'

export default function AlignSpaceAroundFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-817.85v-68.37h812.2v68.37H74.02Zm0 743.83v-68.13h812.2v68.13H74.02Zm211.91-531.91v-108.14h388.14v108.14H285.93Zm0 360v-108.14h388.14v108.14H285.93Z" />
    </svg>
  )
}
