import type { SVGProps, JSX } from 'react'

export default function ImagesearchRollerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M556-92H423v-254h55v-202H132v-227h99v-53h517v130H231v-55h-77v183h346v224h56v254Z" />
    </svg>
  )
}
