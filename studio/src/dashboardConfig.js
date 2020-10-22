export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f91433a5202e5a78b05b5b7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jtx8r7na',
                  apiId: 'dcf442f1-ad88-4a5b-ace2-5b724f37c044'
                },
                {
                  buildHookId: '5f91433ab003f5b3608d9934',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8t86nip2',
                  apiId: '1130e013-ca05-4de2-ba87-68093495bfe4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leisensai/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8t86nip2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
