import type { SVGProps, JSX } from 'react'

export default function PictureInPictureLarge({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M232-340v-389h468v389H232ZM132-212v-22h674v-514h22v536H132Z" />
    </svg>
  )
}
