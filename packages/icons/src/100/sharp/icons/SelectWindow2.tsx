import type { SVGProps } from 'react'

export default function SelectWindow2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154-154h503v-390H154v390Zm525-240v-22h127v-390H303v240h-22v-262h547v434H679ZM132-132v-434h547v434H132Zm423-571ZM405-349Z" />
    </svg>
  )
}
