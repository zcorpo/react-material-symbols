import type { SVGProps, JSX } from 'react'

export default function SquareFoot({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M107-107v-796.52l162.48 161.91-48.22 48.22 28.13 28.13 48.22-48.22 115.87 115.87-48.22 48.22 28.13 28.13 48.22-48.22 116.87 116.87-48.22 48.22 28.13 28.13 48.22-48.22 115.87 115.87-48.22 48.22 28.13 28.13 48.22-48.22L902.96-107H107Zm99.22-99.22h440.95L206.22-647.17v440.95Z" />
    </svg>
  )
}
