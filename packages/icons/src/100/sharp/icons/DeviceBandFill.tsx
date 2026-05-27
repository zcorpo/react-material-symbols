import type { SVGProps } from 'react'

export default function DeviceBandFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M366-132v-486h-24v-61h24v-149h227v149h25v61h-25v486H366Z" />
    </svg>
  )
}
