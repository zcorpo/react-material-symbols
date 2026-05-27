import type { SVGProps } from 'react'

export default function WebFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm22-22h458v-167H154v167Zm480 0h172v-356H634v356ZM154-423h458v-167H154v167Z" />
    </svg>
  )
}
