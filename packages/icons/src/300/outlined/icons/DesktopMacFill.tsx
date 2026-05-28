import type { SVGProps, JSX } from 'react'

export default function DesktopMacFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M357.16-140v-31.92l80.53-81.16h-280q-23.61 0-40.65-17.04Q100-287.15 100-310.77v-451.54q0-23.61 17.04-40.65T157.69-820h644.62q23.61 0 40.65 17.04T860-762.31v451.54q0 23.62-17.04 40.65-17.04 17.04-40.65 17.04h-280l80.53 81.16V-140H357.16Z" />
    </svg>
  )
}
