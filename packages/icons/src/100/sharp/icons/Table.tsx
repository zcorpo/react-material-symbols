import type { SVGProps } from 'react'

export default function Table({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm297-222H194v200h275v-200Zm22 0v200h275v-200H491Zm-22-22v-202H194v202h275Zm22 0h275v-202H491v202ZM194-640h572v-126H194v126Z" />
    </svg>
  )
}
