import type { SVGProps, JSX } from 'react'

export default function AirplayFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m244-95 236-236L716-95H244ZM55-175v-691h851v691l-184 4-247-245-241 241H55Z" />
    </svg>
  )
}
