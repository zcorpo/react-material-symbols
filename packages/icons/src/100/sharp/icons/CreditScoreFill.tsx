import type { SVGProps } from 'react'

export default function CreditScoreFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M582-156 448-290l16-16 118 118 232-232 16 16-248 248ZM154-528h652v-70H154v70Zm-22 316v-536h696v220h-10L582-291 464-410 343-290l57 56v22H132Z" />
    </svg>
  )
}
