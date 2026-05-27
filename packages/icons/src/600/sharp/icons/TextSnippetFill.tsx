import type { SVGProps } from 'react'

export default function TextSnippetFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-105.87V-854.7H593L854.7-593v487.13H105.87Zm168.61-188.52h411.04v-62.83H274.48v62.83Zm0-152.22h411.04V-510H274.48v63.39Zm0-152.78h277.13v-63.39H274.48v63.39Z" />
    </svg>
  )
}
