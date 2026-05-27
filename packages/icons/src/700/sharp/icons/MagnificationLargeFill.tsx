import type { SVGProps, JSX } from 'react'

export default function MagnificationLargeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M203-368h472v-309H203v309ZM55-135v-691h851v691H55Z" />
    </svg>
  )
}
