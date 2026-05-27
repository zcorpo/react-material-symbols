import type { SVGProps } from 'react'

export default function KeyboardKeysFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M294-294v-50h372v50H294ZM133-455v-50h50v50h-50Zm161 0v-50h50v50h-50Zm161 0v-50h50v50h-50Zm161 0v-50h50v50h-50Zm161 0v-50h50v50h-50ZM133-617v-50h50v50h-50Zm161 0v-50h50v50h-50Zm161 0v-50h50v50h-50Zm161 0v-50h50v50h-50Zm161 0v-50h50v50h-50Z" />
    </svg>
  )
}
