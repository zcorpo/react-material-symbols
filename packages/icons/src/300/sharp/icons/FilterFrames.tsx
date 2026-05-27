import type { SVGProps } from 'react'

export default function FilterFrames({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-100v-680h232.31L480-927.69 627.69-780H860v680H100Zm45.39-45.39h669.22v-589.22H145.39v589.22Zm102.3-102.3v-384.62h464.62v384.62H247.69Zm45.39-45.39h373.84v-293.84H293.08v293.84ZM480-439.38Z" />
    </svg>
  )
}
