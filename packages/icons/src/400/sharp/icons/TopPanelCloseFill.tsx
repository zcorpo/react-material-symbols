import type { SVGProps } from 'react'

export default function TopPanelCloseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M344-297h272L480-433 344-297ZM180-180h600v-393H180v393Zm-60 60v-720h720v720H120Z" />
    </svg>
  )
}
