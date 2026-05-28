import type { SVGProps, JSX } from 'react'

export default function LineStartArrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M458-313 195-480l263-167v156h366v22H458v156Zm-22-40v-254L237-480l199 127Zm0-127Z" />
    </svg>
  )
}
