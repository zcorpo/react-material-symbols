import type { SVGProps, JSX } from 'react'

export default function Timer2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M313-194v-332h282v-148H313v-92h374v332H405v148h282v92H313Z" />
    </svg>
  )
}
