import type { SVGProps } from 'react'

export default function BorderOuter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M194-194h572v-572H194v572Zm-22 22v-616h616v616H172Zm146-291v-34h34v34h-34Zm145 145v-34h34v34h-34Zm0-145v-34h34v34h-34Zm0-146v-34h34v34h-34Zm146 146v-34h34v34h-34Z" />
    </svg>
  )
}
