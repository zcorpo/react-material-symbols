import type { SVGProps, JSX } from 'react'

export default function PhotoCameraBackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-114.02v-645.2h209.87l75.39-87h241.44l75.63 87h209.87v645.2H74.02Zm174.44-144.55h469.08L571-451.3l-126 167-92-114-104.54 139.73Z" />
    </svg>
  )
}
