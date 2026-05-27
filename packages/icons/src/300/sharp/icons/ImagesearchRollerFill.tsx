import type { SVGProps, JSX } from 'react'

export default function ImagesearchRollerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M593.54-60h-181v-293.38h67.31v-159.54H100v-279.93h126.08V-860H780v185.38H226.08v-72.84h-80.69v189.15h379.84v204.93h68.31V-60Z" />
    </svg>
  )
}
