import type { SVGProps, JSX } from 'react'

export default function PictureInPictureAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02v-652.2h812.2v652.2H74.02Zm369.83-113.13h335v-257h-335v257Zm168-129Z" />
    </svg>
  )
}
