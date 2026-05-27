import type { SVGProps } from 'react'

export default function KeepOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M623-788v22h-37v295L374-683l10-73h-49v-32h288ZM480-170l-11-11v-188H314v-22l58-57v-102L132-790l16-15 619 620-15 16-200-200h-61v188l-11 11Z" />
    </svg>
  )
}
