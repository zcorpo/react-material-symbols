import type { SVGProps, JSX } from 'react'

export default function SpellcheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M564-116 433-247l16-16 115 115 232-232 16 16-248 248ZM160-318l190-522h21l188 522h-24l-57-161H241l-58 161h-23Zm89-179h223L360-807h-3L249-497Z" />
    </svg>
  )
}
