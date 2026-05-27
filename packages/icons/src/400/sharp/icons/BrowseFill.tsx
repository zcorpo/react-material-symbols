import type { SVGProps, JSX } from 'react'

export default function BrowseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-245h330v245H120Zm390 0v-415h330v415H510ZM120-425v-415h330v415H120Zm390-170v-245h330v245H510Z" />
    </svg>
  )
}
