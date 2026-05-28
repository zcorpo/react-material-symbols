import type { SVGProps, JSX } from 'react'

export default function VariablesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-347.39v-265.24q0-11.64 7.96-19.5 7.96-7.87 19.73-7.87h584.62q11.77 0 19.73 7.87 7.96 7.88 7.96 19.52v265.24q0 11.64-7.96 19.5-7.96 7.87-19.73 7.87H187.69q-11.77 0-19.73-7.87-7.96-7.88-7.96-19.52Z" />
    </svg>
  )
}
