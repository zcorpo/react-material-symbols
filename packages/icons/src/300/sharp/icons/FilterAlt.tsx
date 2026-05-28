import type { SVGProps, JSX } from 'react'

export default function FilterAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M420-180v-266.92L158-780h644L540-446.92V-180H420Zm60-264.46 228.85-290.15h-457.7L480-444.46Zm0 0Z" />
    </svg>
  )
}
