import type { SVGProps } from 'react'

export default function SubdirectoryArrowLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M397.08-160 200-358.54l196.85-196.84 22.23 22.23-160.46 159.69h430.61V-760H720v417.31H259.62l159.69 160.46L397.08-160Z" />
    </svg>
  )
}
