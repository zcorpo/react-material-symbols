import type { SVGProps, JSX } from 'react'

export default function Timer1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M524.62-217.69v-469.23H340v-55.39h240v524.62h-55.38Z" />
    </svg>
  )
}
