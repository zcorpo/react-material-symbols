import type { SVGProps } from 'react'

export default function VideoStableFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02v-652.2h812.2v652.2H74.02Zm615.07-68.13 97.52-370.89-514.94-144.81-97.04 370.89 514.46 144.81Z" />
    </svg>
  )
}
