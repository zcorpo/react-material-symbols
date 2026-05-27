import type { SVGProps } from 'react'

export default function DualScreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-237v-591l296 114v596L212-237Zm370-15v-512l-168-64h334v576H582Z" />
    </svg>
  )
}
