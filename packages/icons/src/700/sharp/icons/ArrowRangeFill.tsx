import type { SVGProps, JSX } from 'react'

export default function ArrowRangeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M265-268 55-478l210-210 66 67-95 94h488l-96-94 68-67 209 210-210 210-69-67 98-96H234l97 96-66 67Z" />
    </svg>
  )
}
