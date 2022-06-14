export default {
  name: 'homepageSchema',
  type: 'document',
  title: 'Homepage',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Header title',
      validation: (Rule) => Rule.required().min(3).max(15),
    },
    {
      name: 'seo_title',
      type: 'string',
      title: 'SEO Title',
    },
    {
      name: 'seo_descr',
      type: 'string',
      title: 'SEO Description',
    },
  ],
}
