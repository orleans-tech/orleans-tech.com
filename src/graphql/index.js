import { gql } from 'react-apollo'

export const talksQuery = gql`
    query TalksQuery($first: Int!, $orderField: String!, $order: Int!, $status: String!) {
        talks(first: $first, orderField: $orderField, order: $order, status: $status) {
            edges {
                node {
                    id
                    number
                    name
                    date
                    status
                    meetupGuestList {
                        meetupID
                        rsvpLimit
                        waitlistCount
                        yesRsvpCount
                        remainingCount
                        link
                    }
                    venue {
                        name
                        address
                        city
                    }
                    sponsor {
                        id
                        name
                        url
                        logoURL
                    }
                }
            }
        }
    }
`

export const peopleQuery = gql`
    query people($kind: String, $order: Int!, $orderField: String!, $first: Int!) {
        people(first: $first, orderField: $orderField, order: $order, kind: $kind) {
            edges {
                node {
                    id
                    firstname
                    lastname
                    title
                    externalDetails {
                        twitter
                        websiteURL
                        github
                    }
                    photo {
                        id
                        title
                        originalSize {
                            kind
                            url
                            width
                            height
                        }
                        sizes {
                            kind
                            url
                            width
                            height
                        }
                    }
                }
            }
        }
    }
`

export const companiesQuery = gql`
    query CompaniesQuery($kind: String, $order: Int!, $orderField: String!, $first: Int!) {
        companies(first: $first, orderField: $orderField, order: $order, kind: $kind) {
            edges {
                node {
                    id
                    name
                    url
                    logo {
                        id
                        title
                        originalSize {
                            kind
                            url
                            width
                            height
                        }
                    }
                }
            }
        }
    }
`

export const homepageAlbumQuery = gql`
    query HomepageAlbumQuery {
        homepageAlbum {
            id
            photos {
                id
                title
                originalSize {
                    kind
                    url
                    width
                    height
                }
                sizes {
                    kind
                    url
                    width
                    height
                }
            }
        }
    }
`
