import type { SVGProps } from 'react'

export default function CardMembershipFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-906h851v651H646v209l-166-83-165 83v-209H55v-651Zm94 465h662v-131H149v131Z" />
    </svg>
  )
}
