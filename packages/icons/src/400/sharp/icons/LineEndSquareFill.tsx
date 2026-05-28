import type { SVGProps, JSX } from 'react'

export default function LineEndSquareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440-260v-190H80v-60h360v-190h440v440H440Z" />
    </svg>
  )
}
