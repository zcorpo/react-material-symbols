import type { SVGProps } from 'react'

export default function HorizontalAlignLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-135v-691h94v691H95Zm365-131L246-480l218-218 67 67-104 104h439v94H427l100 100-67 67Z" />
    </svg>
  )
}
