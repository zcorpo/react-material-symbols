import type { SVGProps } from 'react'

export default function LabelFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h595l257 346-255.9 345H55Z" />
    </svg>
  )
}
