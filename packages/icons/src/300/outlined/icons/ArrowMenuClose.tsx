import type { SVGProps, JSX } from 'react'

export default function ArrowMenuClose({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M421.54-322.54v-314.54L262.69-480l158.85 157.46ZM534.61-140H580v-680h-45.39v680Z" />
    </svg>
  )
}
