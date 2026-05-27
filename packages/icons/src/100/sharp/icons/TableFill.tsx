import type { SVGProps, JSX } from 'react'

export default function TableFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-384H172v212h297v-212Zm22 0v212h297v-212H491Zm-22-22v-212H172v212h297Zm22 0h297v-212H491v212ZM172-640h616v-148H172v148Z" />
    </svg>
  )
}
