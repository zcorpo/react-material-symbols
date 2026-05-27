import type { SVGProps } from 'react'

export default function SpeedCameraFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m741-325-100-57 154-118 101 57-155 118ZM135-135v-93h210v-253l-119-70q-35-21-43.5-59.5T196-683l65-101q21-32 58.5-40.5T389-812l397 237-265 201-82-49v194q0 40-27.5 67T345-135H135Z" />
    </svg>
  )
}
