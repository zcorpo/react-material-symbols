import type { SVGProps, JSX } from 'react'

export default function SpeedCameraFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m715-368-68-39 125-93 68 39-125 93ZM160-160v-60h210v-262L175-592l136-229 446 252-235 173-92-52v288H160Z" />
    </svg>
  )
}
