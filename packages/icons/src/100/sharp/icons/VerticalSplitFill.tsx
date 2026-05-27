import type { SVGProps } from 'react'

export default function VerticalSplitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M170-396v-22h271v22H170Zm0 144v-22h271v22H170Zm0-290v-22h271v22H170Zm0-144v-22h271v22H170Zm411 434v-456h209v456H581Z" />
    </svg>
  )
}
