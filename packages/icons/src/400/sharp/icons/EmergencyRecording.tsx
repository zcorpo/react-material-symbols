import type { SVGProps, JSX } from 'react'

export default function EmergencyRecording({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M370-290h60v-138l126 72 30-51-126-73 126-73-30-51-126 72v-138h-60v138l-126-72-30 51 126 73-126 73 30 51 126-72v138ZM80-160v-640h640v275l160-160v410L720-435v275H80Zm60-60h520v-520H140v520Zm0 0v-520 520Z" />
    </svg>
  )
}
