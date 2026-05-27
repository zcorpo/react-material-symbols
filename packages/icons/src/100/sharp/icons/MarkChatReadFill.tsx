import type { SVGProps, JSX } from 'react'

export default function MarkChatReadFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M696-197 594-300l15-14 87 86 172-172 15 16-187 187Zm-564 17v-648h696v337H509v199H244L132-180Z" />
    </svg>
  )
}
