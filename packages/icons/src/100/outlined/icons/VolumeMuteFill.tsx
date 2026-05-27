import type { SVGProps } from 'react'

export default function VolumeMuteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M332-412v-136h130l126-126v388L462-412H332Z" />
    </svg>
  )
}
