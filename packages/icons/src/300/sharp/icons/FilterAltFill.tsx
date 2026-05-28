import type { SVGProps, JSX } from 'react'

export default function FilterAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M420-180v-266.92L158-780h644L540-446.92V-180H420Z" />
    </svg>
  )
}
