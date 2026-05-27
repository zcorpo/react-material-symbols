import type { SVGProps } from 'react'

export default function FolderCopy({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-120v-620h60v560h740v60H40Zm120-120v-640h300l80 80h380v560H160Zm60-60h640v-440H515l-80-80H220v520Zm0 0v-520 520Z" />
    </svg>
  )
}
