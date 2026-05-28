import type { SVGProps, JSX } from 'react'

export default function PictureInPictureMobileFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M748-132H212v-696h536v696Zm-65-326v-308H453v308h230Z" />
    </svg>
  )
}
