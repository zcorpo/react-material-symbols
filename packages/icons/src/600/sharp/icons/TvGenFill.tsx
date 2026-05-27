import type { SVGProps } from 'react'

export default function TvGenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160.39-107v-78.87H65.87v-628.26H894.7v628.26h-95.09V-107h-39.96l-25.34-78.87H226.22L200.35-107h-39.96Z" />
    </svg>
  )
}
