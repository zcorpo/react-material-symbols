import type { SVGProps } from 'react'

export default function VariablesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-265.87V-694.7H854.7v428.83H105.87Z" />
    </svg>
  )
}
