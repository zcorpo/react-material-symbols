import type { SVGProps } from 'react'

export default function FolderCheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m449-302 192-192-67-67-125 125-62-62-66 67 128 129ZM55-135v-691h355l71 72h425v619H55Z" />
    </svg>
  )
}
