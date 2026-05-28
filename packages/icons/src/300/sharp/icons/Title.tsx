import type { SVGProps, JSX } from 'react'

export default function Title({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M445-180v-529.62H220.39V-780H740v70.38H515.38V-180H445Z" />
    </svg>
  )
}
