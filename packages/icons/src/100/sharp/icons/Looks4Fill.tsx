import type { SVGProps } from 'react'

export default function Looks4Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm379-133h22v-350h-22v163H410v-163h-22v185h163v165Z" />
    </svg>
  )
}
