import type { SVGProps } from 'react'

export default function Mobile3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M374-206h215v-22H374v22ZM252-92v-776h459v192h37v128h-37v456H252Z" />
    </svg>
  )
}
