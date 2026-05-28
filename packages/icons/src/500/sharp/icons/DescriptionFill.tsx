import type { SVGProps, JSX } from 'react'

export default function DescriptionFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M319-249.52h322v-62.63H319v62.63Zm0-170h322v-62.63H319v62.63ZM154.02-74.02v-812.2h429.61l222.59 222.66v589.54h-652.2Zm394.83-557.83h189l-189-186v186Z" />
    </svg>
  )
}
