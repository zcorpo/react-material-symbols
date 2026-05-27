import type { SVGProps } from 'react'

export default function ArrowLeftAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M395-276 191-480l204-204 16 15-178 178h536v22H233l178 178-16 15Z" />
    </svg>
  )
}
