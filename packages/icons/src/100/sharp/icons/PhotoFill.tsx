import type { SVGProps } from 'react'

export default function PhotoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M317-305h335L550-440 447-313l-65-76-65 84ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
