import type { SVGProps, JSX } from 'react'

export default function ResponsiveLayoutFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M625-120v-505H373v-215h467v720H625Zm-252 0v-445h192v445H373Zm-253 0v-445h193v445H120Z" />
    </svg>
  )
}
