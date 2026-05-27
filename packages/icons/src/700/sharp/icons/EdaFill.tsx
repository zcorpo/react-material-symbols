import type { SVGProps } from 'react'

export default function EdaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M107-27v-316h249l108 144 138-138 228-126 106 108L607.85-27H107Zm161-463v-404h87v395h80v-435h87v435h79v-355h87v387L485-273 381-409H134v-448l50 27 18 340h66Z" />
    </svg>
  )
}
