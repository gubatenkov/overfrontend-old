export default interface IPost {
  title: string
  headingImage: { alt: string; asset: { [key: string]: any }; _type: 'image' }
  slug: { _type: 'slug'; current: string }
  date: string
  author?: string
  excerpt?: string
  content?: object[]
  readingTime: number
}
