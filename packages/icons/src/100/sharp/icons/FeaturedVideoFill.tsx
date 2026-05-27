import type { SVGProps } from 'react'

export default function FeaturedVideoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M224-428h309v-228H224v228Zm-92 216v-536h696v536H132Z" />
    </svg>
  )
}
