import type { SVGProps } from 'react'

export default function MmsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M322-436h326L548-568 447-442l-65-72-60 78ZM132-180v-648h696v536H244L132-180Z" />
    </svg>
  )
}
