import type { SVGProps } from 'react'

export default function QuickreplyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M764.57-34.5v-199.52H706v-247.89h148.35l-58 170h87L764.57-34.5ZM74.02-74.02v-812.2h812.2v344.31H646v307.89H234.02l-160 160Z" />
    </svg>
  )
}
