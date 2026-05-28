import type { SVGProps, JSX } from 'react'

export default function ViewComfyAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M75.46-555.46v-329.32h329.32v329.32H75.46Zm0 480v-329.32h329.32v329.32H75.46Zm480-480v-329.32h329.32v329.32H555.46Zm0 480v-329.32h329.32v329.32H555.46Z" />
    </svg>
  )
}
