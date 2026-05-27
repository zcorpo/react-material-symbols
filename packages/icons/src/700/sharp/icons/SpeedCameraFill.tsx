import type { SVGProps, JSX } from 'react'

export default function SpeedCameraFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m741-325-100-57 154-118 101 57-155 118ZM135-135v-93h210v-253L144-601l167-260 475 286-265 201-82-49v288H135Z" />
    </svg>
  )
}
