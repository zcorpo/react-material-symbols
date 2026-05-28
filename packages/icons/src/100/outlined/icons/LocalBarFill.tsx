import type { SVGProps, JSX } from 'react'

export default function LocalBarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M292-146v-22h177v-289L190-766v-22h580v22L491-457v289h177v22H292Zm1-539h374l75-80H218l75 80Z" />
    </svg>
  )
}
