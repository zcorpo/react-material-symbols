import type { SVGProps, JSX } from 'react'

export default function SignpostFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.31-100v-181.92H242.69L140-384.62l102.69-102.69h214.62v-87.3H180V-780h277.31v-80h45.38v80h214.62L820-677.31l-102.69 102.7H502.69v87.3H780v205.39H502.69V-100h-45.38Z" />
    </svg>
  )
}
