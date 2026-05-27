import type { SVGProps } from 'react'

export default function InHomeMode({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-509ZM135-135v-385l-64 49-57-75 466-361 466 362-57 74-409-317-252 195v365h183v93H135Zm492 80L439-242l67-67 121 122 227-226 67 66L627-55Z" />
    </svg>
  )
}
