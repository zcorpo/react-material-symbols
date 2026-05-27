import type { SVGProps, JSX } from 'react'

export default function ContextualToken({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M238-319h280v-116H238v116Zm369 0h115v-321H607v321ZM238-525h280v-115H238v115Zm-89 296h662v-502H149v502Zm-94 94v-691h851v691H55Zm94-94v-502 502Z" />
    </svg>
  )
}
