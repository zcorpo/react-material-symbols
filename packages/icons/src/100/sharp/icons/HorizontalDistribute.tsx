import type { SVGProps } from 'react'

export default function HorizontalDistribute({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-132v-696h34v696h-34Zm317-174v-348h62v348h-62Zm345 174v-696h34v696h-34Z" />
    </svg>
  )
}
