import type { SVGProps, JSX } from 'react'

export default function AddCommentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M444-394h72v-130h130v-72H516v-130h-72v130H314v72h130v130ZM55-55v-851h851v691H215L55-55Z" />
    </svg>
  )
}
