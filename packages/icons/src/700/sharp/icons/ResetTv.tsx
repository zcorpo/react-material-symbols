import type { SVGProps } from 'react'

export default function ResetTv({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M317-95v-80H55v-691h851v247h-95v-152H149v502h662v-218H501l84 83-50 50-170-169 170-170 50 50-84 84h405v384H644v80H317Zm210-428Z" />
    </svg>
  )
}
