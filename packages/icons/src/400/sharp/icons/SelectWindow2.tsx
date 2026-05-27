import type { SVGProps } from 'react'

export default function SelectWindow2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140h516v-392H140v392Zm576-228v-60h104v-392H304v228h-60v-288h636v512H716ZM80-80v-512h636v512H80Zm482-617ZM398-336Z" />
    </svg>
  )
}
