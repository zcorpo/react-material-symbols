import type { SVGProps, JSX } from 'react'

export default function CodeXmlFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-294 54-480l186-186 42 42-143 144 143 144-42 42Zm172 133-58-18 195-620 57 17-194 621Zm308-133-42-42 143-144-143-144 42-42 186 186-186 186Z" />
    </svg>
  )
}
