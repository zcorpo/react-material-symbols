import type { SVGProps, JSX } from 'react'

export default function StraightenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-292v-376h171v148h22v-148h144v148h22v-148h144v148h22v-148h171v376H132Z" />
    </svg>
  )
}
