import type { SVGProps, JSX } from 'react'

export default function IframeOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M833-41 714-160H80v-640h80v86L26-848l43-43L876-84l-43 43ZM140-220h514L218-656h-78v436Zm680-6v-430H390L246-800h634v634l-60-60ZM720-326 486-560h234v234Z" />
    </svg>
  )
}
