export default {
  name: 'authorSchema',
  type: 'document',
  title: 'Authors',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required().min(1).max(30),
    },
    {
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Description',
          validation: (Rule) => Rule.required().min(1).max(50),
        },
      ],
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
      validation: (Rule) => Rule.required().min(1).max(300),
    },
  ],
}
