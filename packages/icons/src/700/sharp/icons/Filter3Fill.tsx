import type { SVGProps } from 'react'

export default function Filter3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M411-355h253v-405H411v71h181v102h-95v60h95v100H411v72ZM192-192v-731h731v731H192ZM37-37v-731h95v636h636v95H37Z" />
    </svg>
  )
}
