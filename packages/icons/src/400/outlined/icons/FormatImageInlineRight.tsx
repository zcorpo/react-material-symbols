import type { SVGProps } from 'react'

export default function FormatImageInlineRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-60h720v60H120Zm330-165v-390h390v390H450Zm60-60h270v-270H510v270ZM120-780v-60h720v60H120Zm0 495v-60h270v60H120Zm525-195Z" />
    </svg>
  )
}
