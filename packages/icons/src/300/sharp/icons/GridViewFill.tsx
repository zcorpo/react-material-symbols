import type { SVGProps, JSX } from 'react'

export default function GridViewFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-512.69V-820h307.31v307.31H140ZM140-140v-307.31h307.31V-140H140Zm372.69-372.69V-820H820v307.31H512.69Zm0 372.69v-307.31H820V-140H512.69Z" />
    </svg>
  )
}
