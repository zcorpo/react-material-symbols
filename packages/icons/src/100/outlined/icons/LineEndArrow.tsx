import type { SVGProps, JSX } from 'react'

export default function LineEndArrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M502-313v-156H136v-22h366v-156l263 167-263 167Zm22-40 199-127-199-127v254Zm0-127Z" />
    </svg>
  )
}
