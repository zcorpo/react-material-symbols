import type { SVGProps } from 'react'

export default function PictureInPictureSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02v-68.13h743.83v-584.07h68.37v652.2H74.02Zm308.83-168.13v-257h335v257h-335Z" />
    </svg>
  )
}
