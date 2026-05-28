import type { SVGProps, JSX } from 'react'

export default function DriveFileMoveFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h253l74 74h369v462H132Zm429-217-83 83 16 16 110-110-110-110-16 16 83 83H356v22h205Z" />
    </svg>
  )
}
