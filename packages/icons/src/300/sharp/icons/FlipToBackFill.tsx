import type { SVGProps } from 'react'

export default function FlipToBackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140v-522.69h45.39v477.3h477.3V-140H140Zm157.69-157.69v-50h50v50h-50Zm0-157.31v-50h50v50h-50Zm0-157.69v-50h50v50h-50Zm0-157.31v-50h50v50h-50ZM455-297.69v-50h50v50h-50ZM455-770v-50h50v50h-50Zm157.69 0v-50h50v50h-50Zm0 472.31v-50h50v50h-50ZM770-770v-50h50v50h-50Zm0 472.31v-50h50v50h-50ZM770-455v-50h50v50h-50Zm0-157.69v-50h50v50h-50Z" />
    </svg>
  )
}
