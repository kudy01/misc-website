module.exports = {
    siteMetadata: {
        title: 'MISC - University of Melbourne Information Security Club',
        siteUrl: 'https://umisc.info',
        description: 'MISC\'s website',
        author: 'josephsurin',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: '',
                sitemap: '',
                policy: [{ userAgent: '*', disallow: ['/1079a055f110d54ba12f08bd6b671f6c'] }]
            }
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'events',
                path: `${__dirname}/src/events`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'MISC - University of Melbourne Information Security Club',
                short_name: 'MISC',
                start_url: '/',
                background_color: '#4f7b85',
                theme_color: '#4b8b9a',
                display: 'minimal-ui',
                icon: `src/images/misc-icon.svg`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            noInlineHighlight: true
                        }
                    },
                    {
                        resolve: 'gatsby-remark-katex',
                        options: {
                            displayMode: false
                        }
                    },
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600
                        }
                    }
                ]
            }
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-transition-link',
        {
            resolve: 'gatsby-theme-gallery',
            options: {
                basePath : '/gallery',
            }
        }
    ]
}
