import type { SVGProps, JSX } from 'react'

export default function MobileArrowRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M353-492v22h212l-94 94 16 16 120-121-118-119-16 16 92 92H353ZM252-92v-776h459v192h37v128h-37v456H252Z" />
    </svg>
  )
}
