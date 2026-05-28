import type { SVGProps, JSX } from 'react'

export default function ArrowDropDown({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-346.43 256.82-568.61h446.36L480-346.43Z" />
    </svg>
  )
}
