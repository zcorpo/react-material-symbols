import type { SVGProps, JSX } from 'react'

export default function West({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M366.92-213.46 100-480.38l266.92-266.93 31.62 31.62-213 212.61h674.84v45.39H185.92l213 212.61-32 31.62Z" />
    </svg>
  )
}
