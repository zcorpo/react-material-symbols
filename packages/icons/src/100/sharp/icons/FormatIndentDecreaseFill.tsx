import type { SVGProps } from 'react'

export default function FormatIndentDecreaseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-22h616v22H172Zm320-149v-22h296v22H492Zm0-148v-22h296v22H492Zm0-149v-22h296v22H492ZM172-766v-22h616v22H172Zm92 377-92-92 92-91v183Z" />
    </svg>
  )
}
