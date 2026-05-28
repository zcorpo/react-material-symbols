import type { SVGProps, JSX } from 'react'

export default function ToolsLadder({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m249-146 186-668h18l-33 123h236l35-123h20L525-146h-18l33-123H304l-35 123h-20Zm116-345h236l50-178H414l-49 178Zm-56 200h237l49-178H358l-49 178Z" />
    </svg>
  )
}
