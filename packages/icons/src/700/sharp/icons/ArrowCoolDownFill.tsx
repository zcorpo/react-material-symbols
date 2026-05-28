import type { SVGProps, JSX } from 'react'

export default function ArrowCoolDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M481-55 175-360l66-66 193 193v-252h94v252l192-194 66 67L481-55Zm-47-490v-145h94v145h-94Zm0-205v-154h94v154h-94Z" />
    </svg>
  )
}
