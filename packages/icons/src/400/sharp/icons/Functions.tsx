import type { SVGProps, JSX } from 'react'

export default function Functions({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-160v-63l275-257-275-257v-63h480v100H396l235 220-235 220h324v100H240Z" />
    </svg>
  )
}
