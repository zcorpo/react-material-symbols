import type { SVGProps } from 'react'

export default function MobileArrowUpRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m382-367 170-170v139h22v-177H397v22h140L366-383l16 16ZM252-92v-776h459v192h37v128h-37v456H252Z" />
    </svg>
  )
}
