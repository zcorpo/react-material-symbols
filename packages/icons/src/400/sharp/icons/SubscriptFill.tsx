import type { SVGProps, JSX } from 'react'

export default function SubscriptFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M769-160v-100h121v-40H769v-30h151v100H799v40h121v30H769Zm-534-80 185-291-172-269h86l135 213 135-213h86L518-531l185 291h-85L469-474 320-240h-85Z" />
    </svg>
  )
}
