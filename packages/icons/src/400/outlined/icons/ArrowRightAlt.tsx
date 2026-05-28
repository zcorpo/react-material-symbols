import type { SVGProps, JSX } from 'react'

export default function ArrowRightAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z" />
    </svg>
  )
}
