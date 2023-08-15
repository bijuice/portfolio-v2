export type Project = {
  name: string
  gitHub: string
  link?: string
  description: string
  stack: string[]
  photos: Photo[]
}

export type Photo = {
  src: string
  alt: string
  title: string
}
