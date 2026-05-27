import type { SVGProps } from 'react'

export default function ExplicitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M374.46-290h210.46v-45.38H419.85v-119.08h165.07v-45.39H419.85v-119.69h165.07v-45.38H374.46V-290ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
