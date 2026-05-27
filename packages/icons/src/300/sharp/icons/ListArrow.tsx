import type { SVGProps, JSX } from 'react'

export default function ListArrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M236.15-183.54 100-319.54l32-30.61 81.46 78.69v-471.08h45.39v471.08l81.23-78.69 31.61 30.61-135.54 136ZM494-217.46v-45.39h366v45.39H494Zm0-239.46v-45.39h366v45.39H494Zm0-239.46v-45.39h366v45.39H494Z" />
    </svg>
  )
}
