import type { SVGProps } from 'react'

export default function MedicalServices({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-640h240v-160h320v160h240v640H80Zm60-60h680v-520H140v520Zm240-580h200v-100H380v100ZM140-140v-520 520Zm310-230v120h60v-120h120v-60H510v-120h-60v120H330v60h120Z" />
    </svg>
  )
}
