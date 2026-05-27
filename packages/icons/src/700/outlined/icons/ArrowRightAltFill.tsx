import type { SVGProps } from 'react'

export default function ArrowRightAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m561-218-67-65 152-152H135v-94h511L493-683l67-64 266 265-265 264Z" />
    </svg>
  )
}
