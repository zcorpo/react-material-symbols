import type { SVGProps } from 'react'

export default function VolumeMuteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-360v-240h160l200-200v640L440-360H280Z" />
    </svg>
  )
}
