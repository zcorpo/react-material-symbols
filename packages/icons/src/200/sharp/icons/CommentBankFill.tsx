import type { SVGProps } from 'react'

export default function CommentBankFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m546.08-567.77 78.54-43.08 78.3 43.08v-241.46H546.08v241.46ZM120-156.92V-840h720v560H243.08L120-156.92Z" />
    </svg>
  )
}
