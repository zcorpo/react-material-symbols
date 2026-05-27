import type { SVGProps } from 'react'

export default function FormatAlignCenter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-22h616v22H172Zm160-149v-22h296v22H332ZM172-469v-22h616v22H172Zm160-149v-22h296v22H332ZM172-766v-22h616v22H172Z" />
    </svg>
  )
}
