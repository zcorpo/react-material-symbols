import type { SVGProps, JSX } from 'react'

export default function CreditCard({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm22-383h652v-131H154v131Zm0 361h652v-295H154v295Zm0 0v-492 492Z" />
    </svg>
  )
}
