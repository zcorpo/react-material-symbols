import type { SVGProps, JSX } from 'react'

export default function ShelfPosition({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm22-22h572v-153H194v153Zm443-175h129v-397H637v397Zm-443 0h129v-397H194v397Zm151 0h270v-397H345v397Z" />
    </svg>
  )
}
