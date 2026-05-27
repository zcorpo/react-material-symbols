import type { SVGProps } from 'react'

export default function CommentBankFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m514-558 97-50 96 50v-253H514v253ZM55-55v-851h851v691H215L55-55Z" />
    </svg>
  )
}
