import type { SVGProps } from 'react'

export default function Crossword({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M391-134h178v-177H391v177ZM134-391h177v-178H134v178Zm257 0h178v-178H391v178Zm257 0h178v-178H648v178Zm0-257h178v-178H648v178ZM311-55v-256H55v-337h514v-258h337v595H648v256H311Z" />
    </svg>
  )
}
