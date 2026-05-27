import type { SVGProps } from 'react'

export default function IdentityAwareProxy({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M146-174v-22h668v22H146Zm0-590v-22h668v22H146Zm0 161v-50h50v50h-50Zm618 0v-50h50v50h-50ZM146-308v-50h50v50h-50Zm618 0v-50h50v50h-50Zm-415 0v-161H146v-22h203v-162h262v162h203v22H611v161H349Z" />
    </svg>
  )
}
