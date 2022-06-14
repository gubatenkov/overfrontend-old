export default interface IAuthor {
  name: string
  avatar: { alt: string; asset: { [key: string]: any }; _type: 'image' }
  bio: string
}
