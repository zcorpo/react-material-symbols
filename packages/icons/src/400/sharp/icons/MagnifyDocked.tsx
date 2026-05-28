import type { SVGProps, JSX } from 'react'

export default function MagnifyDocked({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm60-100v40h680v-40H140Zm0-60h680v-420H140v420Zm430-90h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90ZM140-260v40-40Z" />
    </svg>
  )
}
