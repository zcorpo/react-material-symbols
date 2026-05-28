import type { SVGProps, JSX } from 'react'

export default function ArrowRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M420-327.69v-304.62L572.31-480 420-327.69Z" />
    </svg>
  )
}
