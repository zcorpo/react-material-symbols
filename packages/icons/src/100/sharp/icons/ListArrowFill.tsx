import type { SVGProps } from 'react'

export default function ListArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M246-218 132-330l16-14 87 83v-452h22v452l88-83 15 14-114 112Zm256-29v-22h326v22H502Zm0-221v-22h326v22H502Zm0-221v-22h326v22H502Z" />
    </svg>
  )
}
