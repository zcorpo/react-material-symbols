import type { SVGProps } from 'react'

export default function Barcode({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M128-236v-448h66v448h-66Zm96 0v-448h64v448h-64Zm96 0v-448h32v448h-32Zm96 0v-448h64v448h-64Zm96 0v-448h96v448h-96Zm128 0v-448h32v448h-32Zm96 0v-448h96v448h-96Z" />
    </svg>
  )
}
