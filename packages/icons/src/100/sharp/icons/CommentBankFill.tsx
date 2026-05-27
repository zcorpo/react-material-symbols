import type { SVGProps } from 'react'

export default function CommentBankFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m553-574 73-41 73 41v-232H553v232ZM132-180v-648h696v536H244L132-180Z" />
    </svg>
  )
}
