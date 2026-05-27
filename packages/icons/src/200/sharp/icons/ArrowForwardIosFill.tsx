import type { SVGProps } from 'react'

export default function ArrowForwardIosFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m312.46-108.92-36-35.46 336.85-336.85-336.85-336.08 36-36.23 372.31 372.31-372.31 372.31Z" />
    </svg>
  )
}
