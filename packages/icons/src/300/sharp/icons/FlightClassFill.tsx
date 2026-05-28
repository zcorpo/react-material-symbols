import type { SVGProps, JSX } from 'react'

export default function FlightClassFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M492.31-460v-320H700v320H492.31ZM700-260H332.31L220-641.08V-780h45.39v131.08l101.53 343.53H700V-260ZM328.08-140v-45.39h371.53V-140H328.08Z" />
    </svg>
  )
}
