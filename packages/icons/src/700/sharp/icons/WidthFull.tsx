import type { SVGProps } from 'react'

export default function WidthFull({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm94-94h70v-502h-70v502Zm165 0h333v-502H314v502Zm427 0h70v-502h-70v502ZM314-731v502-502Z" />
    </svg>
  )
}
