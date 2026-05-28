import type { SVGProps, JSX } from 'react'

export default function CardsStarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m492-473 73-44 73 44-20-83 65-56-85-7-33-78-33 78-85 7 65 56-20 83ZM196-132l-66-501 97-9v415h529l4 24-564 71Zm105-169v-527h527v527H301Z" />
    </svg>
  )
}
