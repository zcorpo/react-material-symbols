import type { SVGProps } from 'react'

export default function MagnifyDocked({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm94-134v40h662v-40H149Zm0-80h662v-382H149v382Zm411-76h80v-75h75v-80h-75v-75h-80v75h-75v80h75v75ZM149-269v40-40Z" />
    </svg>
  )
}
