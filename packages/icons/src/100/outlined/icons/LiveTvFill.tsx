import type { SVGProps, JSX } from 'react'

export default function LiveTvFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m407-391 202-129-202-129v258Zm-32 219v-80H186q-23 0-38.5-15.5T132-306v-428q0-23 15.5-38.5T186-788h588q23 0 38.5 15.5T828-734v428q0 23-15.5 38.5T774-252H585v80H375Z" />
    </svg>
  )
}
