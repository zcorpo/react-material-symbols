import type { SVGProps, JSX } from 'react'

export default function PowerInputFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-390v-60h214v60H80Zm0-120v-60h760v60H80Zm274 120v-60h213v60H354Zm273 0v-60h213v60H627Z" />
    </svg>
  )
}
