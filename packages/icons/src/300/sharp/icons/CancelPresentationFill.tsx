import type { SVGProps, JSX } from 'react'

export default function CancelPresentationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m363-331 117-117 117 117 32-32-117-117 117-117-32-32-117 117-117-117-32 32 117 117-117 117 32 32ZM100-180v-600h760v600H100Z" />
    </svg>
  )
}
