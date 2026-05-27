import type { SVGProps } from 'react'

export default function HorizontalSplitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-187v-320H854.7v320H105.87Zm0-373.78V-640H854.7v79.22H105.87Zm0-133V-773H854.7v79.22H105.87Z" />
    </svg>
  )
}
