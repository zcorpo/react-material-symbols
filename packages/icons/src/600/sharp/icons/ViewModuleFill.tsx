import type { SVGProps } from 'react'

export default function ViewModuleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M621-495v-279.7h238.78V-495H621Zm-256.22 0v-279.7h231.44V-495H364.78Zm-264 0v-279.7H339V-495H100.78Zm0 309.13V-465H339v279.13H100.78Zm264 0V-465h231.44v279.13H364.78Zm256.22 0V-465h238.78v279.13H621Z" />
    </svg>
  )
}
