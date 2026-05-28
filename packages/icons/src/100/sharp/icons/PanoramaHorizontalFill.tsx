import type { SVGProps, JSX } from 'react'

export default function PanoramaHorizontalFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-218v-522q73 19 154 36.5T479.5-686q112.5 0 194-17.5T828-740v522q-73-19-154.5-35.5t-194-16.5Q367-270 286-253.5T132-218Z" />
    </svg>
  )
}
