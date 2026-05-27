import type { SVGProps } from 'react'

export default function Filter4Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M192-192v-731h731v731H192ZM37-37v-731h95v636h636v95H37Zm553-318h72v-405h-72v142H480v-142h-71v214h181v191Z" />
    </svg>
  )
}
