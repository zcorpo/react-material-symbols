import type { SVGProps, JSX } from 'react'

export default function Shift({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M340-140v-297.31H162.31L480-848.46l317.69 411.15H620V-140H340Zm45.39-45.39h189.22v-297.3h127.24L480-775.61 258.15-482.69h127.24v297.3ZM480-482.69Z" />
    </svg>
  )
}
