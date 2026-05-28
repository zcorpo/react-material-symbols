import type { SVGProps, JSX } from 'react'

export default function HighlighterSize4Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M341-115 115-341q-14-14-14-33.5t14-33.5l437-437q14-14 33-14t33 14l227 226q14 14 14 33.5T845-552L408-115q-14 14-33.5 14T341-115Z" />
    </svg>
  )
}
