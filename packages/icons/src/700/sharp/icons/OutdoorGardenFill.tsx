import type { SVGProps } from 'react'

export default function OutdoorGardenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M58-97h256v-646L186-869 58-743v646Zm294 0h256v-646L480-869 352-743v646Zm294 0h256v-646L774-869 646-743v646Z" />
    </svg>
  )
}
