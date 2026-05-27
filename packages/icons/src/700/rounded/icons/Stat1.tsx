import type { SVGProps, JSX } from 'react'

export default function Stat1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-528 315-363q-14 14-33 14t-33-14q-14-14-14-33t14-33l197-197q7-7 16-11t18-4q9 0 18 4t16 11l197 197q14 14 14 33.5T711-363q-14 14-33 14t-33-14L480-528Z" />
    </svg>
  )
}
