import type { SVGProps } from 'react'

export default function KeyboardDoubleArrowRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M383-481 185-679l66-66 264 264-264 264-66-66 198-198Zm262 0L447-679l66-66 264 264-264 264-66-66 198-198Z" />
    </svg>
  )
}
