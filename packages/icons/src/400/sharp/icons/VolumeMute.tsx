import type { SVGProps, JSX } from 'react'

export default function VolumeMute({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-360v-240h160l200-200v640L440-360H280Zm60-60h127l113 109v-337L467-540H340v120Zm119-60Z" />
    </svg>
  )
}
