import type { SVGProps, JSX } from 'react'

export default function FormatLetterSpacingWiderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h22v536h-22Zm674 0v-536h22v536h-22Zm-486-69 146-396h25l149 396h-29l-42-120H389l-42 120h-27Zm78-143h162l-80-225h-2l-80 225Z" />
    </svg>
  )
}
