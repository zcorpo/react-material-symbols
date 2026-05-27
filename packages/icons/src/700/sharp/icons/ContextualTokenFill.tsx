import type { SVGProps } from 'react'

export default function ContextualTokenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M238-319h280v-116H238v116Zm369 0h115v-321H607v321ZM238-525h280v-115H238v115ZM55-135v-691h851v691H55Z" />
    </svg>
  )
}
