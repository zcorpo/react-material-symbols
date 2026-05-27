import type { SVGProps } from 'react'

export default function LanguageInternational({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M106-346v-268h22v268h-22Zm103 0v-268h35l151 281-20 4v-285h22v268h-34L213-626l18-1v281h-22Zm333 0v-246h-83v-22h188v22h-83v246h-22Zm167 0v-268h22v246h123v22H709Z" />
    </svg>
  )
}
