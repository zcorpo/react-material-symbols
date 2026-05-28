import type { SVGProps, JSX } from 'react'

export default function LabelOff({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m692-303-16-16 125-161-191-246H275l-22-22h368l207 268-136 177Zm-538 69h460L154-694v460ZM834-14 635-212H132v-504L15-833l17-16L850-30l-16 16ZM538-523Zm-154 59Z" />
    </svg>
  )
}
