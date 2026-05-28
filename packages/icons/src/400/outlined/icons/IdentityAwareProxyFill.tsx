import type { SVGProps, JSX } from 'react'

export default function IdentityAwareProxyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-60h720v60H120Zm0-660v-60h720v60H120Zm0 165v-60h60v60h-60Zm660 0v-60h60v60h-60ZM120-285v-60h60v60h-60Zm660 0v-60h60v60h-60Zm-450 0v-165H120v-60h210v-165h300v165h210v60H630v165H330Z" />
    </svg>
  )
}
