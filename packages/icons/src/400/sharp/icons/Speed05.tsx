import type { SVGProps } from 'react'

export default function Speed05({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M285-277v-60h60v60h-60Zm120 0v-60h170v-115H405v-231h230v60H465v111h170v235H405Z" />
    </svg>
  )
}
