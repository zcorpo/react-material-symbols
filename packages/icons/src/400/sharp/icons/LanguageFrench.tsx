import type { SVGProps, JSX } from 'react'

export default function LanguageFrench({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-280v-400h280v60H220v120h180v60H220v160h-60Zm360 0v-400h240l40 40v160l-40 40h-46l87 160h-68l-86-160h-67v160h-60Zm60-220h160v-120H580v120Z" />
    </svg>
  )
}
