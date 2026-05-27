import type { SVGProps, JSX } from 'react'

export default function RequestPageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-240h60v-40h90v-190H420v-70h180v-60h-90v-40h-60v40h-90v190h180v70H360v60h90v40ZM160-80v-800h401l239 239v561H160Z" />
    </svg>
  )
}
