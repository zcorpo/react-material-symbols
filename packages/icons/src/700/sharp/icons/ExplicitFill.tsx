import type { SVGProps } from 'react'

export default function ExplicitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-274h239v-72H432v-94h167v-72H432v-95h167v-72H360v405ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
