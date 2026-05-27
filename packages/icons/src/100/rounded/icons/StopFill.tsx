import type { SVGProps, JSX } from 'react'

export default function StopFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M292-346v-268q0-21.5 16.25-37.75T346-668h268q21.5 0 37.75 16.25T668-614v268q0 21.5-16.25 37.75T614-292H346q-21.5 0-37.75-16.25T292-346Z" />
    </svg>
  )
}
