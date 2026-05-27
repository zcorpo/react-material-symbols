import type { SVGProps } from 'react'

export default function ExplicitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M362.61-276.61h233.78v-66.78h-167v-99.22h167v-66.78h-167v-100.22h167v-66.78H362.61v399.78ZM105.87-105.87V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
