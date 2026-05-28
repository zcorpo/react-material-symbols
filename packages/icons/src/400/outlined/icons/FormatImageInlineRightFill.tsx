import type { SVGProps, JSX } from 'react'

export default function FormatImageInlineRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-60h720v60H120Zm330-165v-390h390v390H450ZM120-780v-60h720v60H120Zm0 495v-60h270v60H120Z" />
    </svg>
  )
}
