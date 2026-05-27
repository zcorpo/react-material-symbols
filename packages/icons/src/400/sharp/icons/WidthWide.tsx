import type { SVGProps } from 'react'

export default function WidthWide({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm60-60h110v-520H140v520Zm170 0h340v-520H310v520Zm400 0h110v-520H710v520ZM310-740v520-520Z" />
    </svg>
  )
}
