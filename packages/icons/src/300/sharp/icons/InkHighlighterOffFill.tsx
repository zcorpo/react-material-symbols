import type { SVGProps, JSX } from 'react'

export default function InkHighlighterOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M626.77-422.46 450.23-599l241.23-240.84L868-663.31 626.77-422.46ZM809.69-83.85 548.92-344.23 349.15-144.85h-41.07l-38.93-38.92-48.38 48.38H98.08l109.23-109.23L172-280.31v-40.07l200.39-200.39L83.85-809.69l31.61-31.62 725.85 725.85-31.62 31.61Z" />
    </svg>
  )
}
