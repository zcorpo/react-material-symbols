import type { SVGProps, JSX } from 'react'

export default function Upload({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.31-323.39v-368.69l-110.39 110-32.61-32.23L480-780l165.69 165.69-32.61 32.23-110.39-110v368.69h-45.38ZM180-180v-183h45.39v137.61h509.22V-363H780v183H180Z" />
    </svg>
  )
}
