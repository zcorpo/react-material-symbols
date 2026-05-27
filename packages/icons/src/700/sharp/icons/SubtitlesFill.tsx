import type { SVGProps } from 'react'

export default function SubtitlesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm194-223h342v-60H249v60Zm402 0h60v-60h-60v60ZM249-478h60v-60h-60v60Zm120 0h342v-60H369v60Z" />
    </svg>
  )
}
