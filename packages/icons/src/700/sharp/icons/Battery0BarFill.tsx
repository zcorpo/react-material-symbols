import type { SVGProps, JSX } from 'react'

export default function Battery0BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M249-55v-787h134v-64h194v64h134v787H249Zm95-94h272v-598H344v598Z" />
    </svg>
  )
}
