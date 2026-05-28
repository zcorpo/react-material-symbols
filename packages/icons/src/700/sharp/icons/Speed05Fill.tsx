import type { SVGProps, JSX } from 'react'

export default function Speed05Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M272-277v-71h72v71h-72Zm132 0v-71h173v-98H404v-237h245v71H475v94h174v241H404Z" />
    </svg>
  )
}
