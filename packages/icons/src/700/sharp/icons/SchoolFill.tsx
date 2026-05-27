import type { SVGProps } from 'react'

export default function SchoolFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M859-272v-280L479-348 18-600l461-251 463 251v328h-83ZM479-110 179-273v-199l300 165 301-165v199L479-110Z" />
    </svg>
  )
}
