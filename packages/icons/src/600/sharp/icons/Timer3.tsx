import type { SVGProps, JSX } from 'react'

export default function Timer3({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M327.17-196.61v-86.78h260.44v-153.22H369.17v-86.78h218.44v-153.22H327.17v-86.78h347.22v240L634.96-478l39.43 41.39v240H327.17Z" />
    </svg>
  )
}
