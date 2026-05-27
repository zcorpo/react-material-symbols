import type { SVGProps } from 'react'

export default function Tab({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M149-229h662v-338H524v-164H149v502Zm-94 94v-691h851v691H55Zm94-94v-502 502Z" />
    </svg>
  )
}
