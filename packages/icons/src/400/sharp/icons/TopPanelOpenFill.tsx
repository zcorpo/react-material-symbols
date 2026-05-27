import type { SVGProps, JSX } from 'react'

export default function TopPanelOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m480-297 136-136H344l136 136ZM180-180h600v-393H180v393Zm-60 60v-720h720v720H120Z" />
    </svg>
  )
}
