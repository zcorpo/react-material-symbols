import type { SVGProps } from 'react'

export default function Download({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM160-160v-203h60v143h520v-143h60v203H160Z" />
    </svg>
  )
}
