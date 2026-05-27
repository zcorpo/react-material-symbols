import type { SVGProps } from 'react'

export default function ViewCompactAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M347-347h102v-102H347v102Zm0-165h102v-102H347v102Zm165 165h102v-102H512v102Zm0-165h102v-102H512v102ZM132-212v-536h696v536H132Z" />
    </svg>
  )
}
