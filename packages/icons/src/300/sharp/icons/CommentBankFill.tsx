import type { SVGProps, JSX } from 'react'

export default function CommentBankFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m534.54-557.39 87.77-46.53 87.15 46.53v-257.22H534.54v257.22ZM100-118.46V-860h760v600H241.54L100-118.46Z" />
    </svg>
  )
}
