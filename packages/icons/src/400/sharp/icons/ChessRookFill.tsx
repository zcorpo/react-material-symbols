import type { SVGProps } from 'react'

export default function ChessRookFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-80v-192q76-60 120-133t71-168H243v-307h184v123h106v-123h184v307H609q26 95 70.5 168T800-272v192H160Z" />
    </svg>
  )
}
