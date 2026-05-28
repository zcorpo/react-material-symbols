import type { SVGProps, JSX } from 'react'

export default function CopyAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-282v-34h34v34h-34Zm0-150v-34h34v34h-34Zm0-150v-34h34v34h-34Zm150 450v-34h34v34h-34Zm-6-144v-552h432v552H316Zm156 144v-34h34v34h-34Zm-300 0v-34h34v34h-34Zm450 0v-34h34v34h-34ZM172-732v-34h34v34h-34Z" />
    </svg>
  )
}
