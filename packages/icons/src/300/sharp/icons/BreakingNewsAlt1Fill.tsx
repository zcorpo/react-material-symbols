import type { SVGProps, JSX } from 'react'

export default function BreakingNewsAlt1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M262.69-297.31h174.62v-45.38H262.69v45.38Zm389.23 0h45.39v-45.38h-45.39v45.38Zm-389.23-160h174.62v-45.38H262.69v45.38Zm389.23 0h45.39v-205.38h-45.39v205.38Zm-389.23-160h174.62v-45.38H262.69v45.38ZM94.31-140v-680h771.38v680H94.31Z" />
    </svg>
  )
}
