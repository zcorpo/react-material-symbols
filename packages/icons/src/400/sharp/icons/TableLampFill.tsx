import type { SVGProps, JSX } from 'react'

export default function TableLampFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M520-120v-60h320v60H520Zm130-100v-470H440v170H99l140-320h201v90h270v530h-60Z" />
    </svg>
  )
}
