import type { SVGProps } from 'react'

export default function PictureInPictureCenterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02v-652.2h812.2v652.2H74.02ZM312-351h335v-257H312v257Z" />
    </svg>
  )
}
