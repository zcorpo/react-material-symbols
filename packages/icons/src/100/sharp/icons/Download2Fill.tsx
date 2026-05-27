import type { SVGProps } from 'react'

export default function Download2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-132v-22h536v22H212Zm267-148L271-559h122v-269h173v269h122L479-280Z" />
    </svg>
  )
}
