import type { SVGProps, JSX } from 'react'

export default function ViewQuilt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-240v-480h640v480H160Zm226.92-255.38h382.31v-193.85H386.92v193.85Zm208.23 224.61h174.08v-193.85H595.15v193.85Zm-208.23 0h174.31v-193.85H386.92v193.85Zm-196.15 0h165.38v-418.46H190.77v418.46Z" />
    </svg>
  )
}
