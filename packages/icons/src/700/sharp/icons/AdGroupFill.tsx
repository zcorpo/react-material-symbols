import type { SVGProps } from 'react'

export default function AdGroupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M192-192v-731h731v731H192ZM37-37v-731h95v636h636v95H37Zm249-740h542v-51H286v51Z" />
    </svg>
  )
}
