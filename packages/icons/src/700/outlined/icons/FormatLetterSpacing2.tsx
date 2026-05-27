import type { SVGProps, JSX } from 'react'

export default function FormatLetterSpacing2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M225-55 55-225l170-169 66 66-55 55h488l-55-55 68-66 169 169L736-55l-67-66 57-57H236l55 57-66 66Zm51-411 164-440h81l164 440h-91l-37-107H398l-36 107h-86Zm138-168h130l-63-188h-4l-63 188Z" />
    </svg>
  )
}
