import type { SVGProps } from 'react'

export default function AddToQueueFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M444-365h72v-124h124v-72H516v-124h-72v124H320v72h124v124ZM317-95v-80H55v-691h851v691H644v80H317Z" />
    </svg>
  )
}
