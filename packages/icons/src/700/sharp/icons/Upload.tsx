import type { SVGProps } from 'react'

export default function Upload({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M433-322v-323L319-530l-68-67 229-229 229 229-68 67-114-115v323h-94ZM135-135v-237h94v143h502v-143h95v237H135Z" />
    </svg>
  )
}
