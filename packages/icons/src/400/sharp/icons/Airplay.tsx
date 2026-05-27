import type { SVGProps, JSX } from 'react'

export default function Airplay({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m273-120 207-206 206 206H273ZM80-200v-640h800v640H700v-60h120v-520H140v520h119v60H80Zm400-290Z" />
    </svg>
  )
}
