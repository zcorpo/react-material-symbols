import type { SVGProps, JSX } from 'react'

export default function CropLandscapeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02v-652.2h812.2v652.2H74.02Z" />
    </svg>
  )
}
