import type { SVGProps } from 'react'

export default function ContextualToken({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M244-325h266v-102H244v102Zm370 0h102v-309H614v309ZM244-532h266v-102H244v102ZM140-220h680v-520H140v520Zm-60 60v-640h800v640H80Zm60-60v-520 520Z" />
    </svg>
  )
}
