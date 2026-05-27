import type { SVGProps } from 'react'

export default function CurrencyYuanFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-120v-272H240v-60h207L200-840h71l209 329 209-329h71L513-452h207v60H510v272h-60Z" />
    </svg>
  )
}
