import type { SVGProps, JSX } from 'react'

export default function Icon1kFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M507.62-372.31h30.76v-94.61l97.85 94.61H683L567.15-481.54 683-587.69h-45.23l-99.39 93.07v-93.07h-30.76v215.38Zm-157 0h30.76v-215.38h-92.23v30.77h61.47v184.61ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
