import type { SVGProps, JSX } from 'react'

export default function SouthEastFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M361.37-194.5v-68.13h288.26L154.02-758.48l47.74-47.74 495.61 495.85v-288.26h68.13v404.13H361.37Z" />
    </svg>
  )
}
