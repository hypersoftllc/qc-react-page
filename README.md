# @qc/react-page

[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A small library of page related semantic React components.  These allow a web
page to be composed semantically -- making it easier to understand it's
structure and [outline][whatwg-outline].

Websites and web apps many times are composed of multiple pages where only one
page is shown at a time.  The pages themselves are composed of many different
**regions**.  A typical page has a site header in the top region (aka a page
head) which usually has a brand image along with some site-wide navigation.
Below this region may be another page head which contains breadcrumbs, a table
of contents, share-this links, and other page-specific content.  Below this
region is usually the meat of the page.  This region (aka a page body) may be
composed of many sections that help form the outline of the page.  A page may
have many page bodies.  Some pages may have a sidebar region which is usually
displayed on either the left-side or right-side of the page.  After the page
body(ies) and page sidebar is the bottom region (aka a page foot) which among
other things usually contains legal information such as copyright notices, a
list of site links, a link to the site's privacy policy, and a link to the
site's terms.

In the description above, please note the word `site` may be replaced by the
word `app`.


## Installation

```sh
npm install --save @qc/react-page
```

or

```sh
yarn add @qc/react-page
```


## Semantics

Each of the page components have specific meaning and purpose.

If you are unfamiliar with semantics, checkout the [semantics][whatwg-semantics]
section at the [WhatWG].

Also, being familiar with how headings and sections generate an outline is
useful when choosing an appropriate value for the `compType` property of the
page related components.  See [headings and sections][whatwg-headings-sections]
at [WhatWG].  Pay very close attention to when the word `heading` and the word
`header` is used.  They can be very easy to confuse.


**`Page`**

Represents a page on a website or a web app.  Usually only one page is displayed
at a time.  However, sometimes multiple pages may be loaded to provide a better
user experience (UX).  For instance, in mobile apps, it is not uncommon to
navigate back and forth between a search results page and a details page.  In
this scenerio, it would be ideal not to reload the results page everytime the
user navigates back to it.  This can be easily done by using multiple page
components.

By default, pages produce a `div` element.  This may be changed using the
`compType` property which may be set to `'div'` or `'section'`.

**`Page.Head`**

Represents the top region of a page.  It is okay to have more than one page
head.  Usually they follow one after the other.  Typically, the first page head
will contain site-wide content such as brand information and the main
navigation.  If the page has page-specific content such as breadcrumbs, a table
of contents, share-this links, etc, then a separate page head will follow the
site-wide page head.

By default, page heads produce a `header` element.  This may be changed using
the `compType` property which may be set to `'div'`, `'header'`, or `'section'`.

Many times, some of the page head content is not printed.  For instance, it is
usually not necessary to print the main navigation or the share-this links since
they are not very useful in printed versions.

**`Page.Body`**

Represents the main region of a page and it contains the meat of a page.  It
is not uncommon for a page to have multiple page bodies.

By default, page bodies produce a `div` element.  This may be changed using
the `compType` property which may be set to `'article'`, `'div'`, `'main'`, or
`'section'`.

**`Page.Sidebar`**

Represents the sidebar region of a page and it contains content that is
tangentially related to the surrounding content.  It is not uncommon for a page
to have multiple sidebars.

By default, page sidebars produce an `aside` element.  This may be changed using
the `compType` property which may be set to `'aside'`, `'div'`, or `'section'`.

**`Page.Foot`**

Represents the bottom region of a page.  It is okay to have more than one page
foot.  Usually they follow one after the other.  Typically, the last page foot
will contain site-wide content such as a list of links, legal information, and
more.  Sometimes, a page will have a page foot above (that is, comes before) the
side-wide page foot.  This page foot will usually contain information about its
section (which are typically represented by `Page.Body` components) such as who
wrote it, links to related documents, copyright data, and the like.

By default, page foots (intentionally not using feet) produce a `footer`
element.  This may be changed using the `compType` property which may be set to
`'div'`, `'footer'`, or `'section'`.

Many times, some of the page foot content is not printed.  For instance, it is
usually not necessary to print the list of links since they are not very useful
in printed versions.


## Example Usage

A typical use case is in a single-page application (SPA) where each page is
rendered by top-level routes.

Please examine the following example closely to get a better feel for how to use
the page related components semantically.

```jsx
// AboutPage.jsx
import React from 'react'

import Page from '@qc/react-page'

import '@qc/react-page/umd/react-page.css'

export default function AboutPage(props) {
  return (
    <Page className="AboutPage">
      <Page.Head className="is-SiteWide">
        <SiteHeader/>
      </Page.Head>
      <Page.Body compType="main">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur...</p>
      </Page.Body>
      <Page.Foot className="is-PageSpecific">
        <Testimonials/>
      </Page.Foot>
      <Page.Foot className="is-SiteWide">
        <SiteFooter/>
      </Page.Foot>
    </Page>
  )
}
```

```jsx
// HomePage.jsx
import React from 'react'

import Page from '@qc/react-page'

import '@qc/react-page/umd/react-page.css'

export default function HomePage(props) {
  return (
    <Page className="HomePage">
      <Page.Head className="is-SiteWide">
        <SiteHeader/>
      </Page.Head>
      <Page.Body compType="section">
        <ObligatoryCarousel/>
      </Page.Body>
      <Page.Body compType="section">
        <h1>Why Us?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur...</p>
      </Page.Body>
      <Page.Body compType="section">
        <h1>Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur...</p>
      </Page.Body>
      <Page.Body compType="section">
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur...</p>
      </Page.Body>
      <Page.Body compType="section">
        <h1>Our Sponsors</h1>
        <SponsorList/>
      </Page.Body>
      <Page.Foot className="is-SiteWide">
        <SiteFooter/>
      </Page.Foot>
    </Page>
  )
}
```

```jsx
// SomeBlogPage.jsx
import React from 'react'

import Page from '@qc/react-page'

import '@qc/react-page/umd/react-page.css'

export default function SomeBlogPage(props) {
  return (
    <Page className="SomeBlogPage">
      <Page.Head className="is-SiteWide">
        <SiteHeader/>
      </Page.Head>
      <Page.Head className="is-PageSpecific">
        <BlogNav/>
        <ShareLinks/>
      </Page.Head>
      <Page.Body compType="article">
        <h1>Some Blog Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur...</p>
        <p>Lorem ipsum dolor sit amet, consectetur...</p>
        <aside>Advertisement...</aside>
        <p>Lorem ipsum dolor sit amet, consectetur...</p>
      </Page.Body>
      <Page.Sidebar>
        <RelatedLinks/>
        <TagCloud/>
        <Etc/>
      </Page.Sidebar>
      <Page.Foot className="is-PageSpecific">
        <RelatedBlogLinks/>
        <BlogComments/>
      </Page.Foot>
      <Page.Foot className="is-SiteWide">
        <SiteFooter/>
      </Page.Foot>
    </Page>
  )
}
```

```jsx
// App.jsx
import React from 'react'
import { Route } from 'react-router'

import AboutPage from './AboutPage'
import HomePage from './HomePage'
import SomeBlogPage from './SomeBlogPage'

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/blog/some" component={SomeBlogPage}/>
      </div>
    )
  }
}
```

```jsx
// index.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
)
```


## Use with React-Bootstrap

The following demonstrates some typical uses of `react-bootstrap`'s "layout"
components with `@qc/react-page` components.

```jsx
import React from 'react'
import { Carousel, Col, Grid, Row } from 'react-bootstrap'
import Page from '@qc/react-page'

import '@qc/react-page/umd/react-page.css'

class HomePage extends React.Component {
  render() {
    return (
      <Page className="HomePage">
        <Page.Head className="is-SiteWide  SiteHeader">
          <Grid>
            <Row>
              <Col xs={4}>
                <img alt="brand" src="..."/>
              </Col>
              <Col xs={8}>
                <nav className="MainNav">
                  ...
                </nav>
              </Col>
            </Row>
          </Grid>
        </Page.Head>
        {/*
        Notice how the following page body is not being width-constrained with
        a `Grid` component since carousels typically span the full page width.
        */}
        <Page.Body>
          <Carousel/>
        </Page.Body>
        <Page.Body>
          <Grid>
            <Row>
              <Col xs={12} smOffset={3} sm={6}>...</Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>...</Col>
              <Col xs={12} sm={6}>...</Col>
            </Row>
          </Grid>
        </Page.Body>
        <Page.Foot className="is-SiteWide  SiteFooter">
          <Grid>
            <Row>
              <Col md={4}>
                <SiteLinks/>
              </Col>
              <Col md={4}>
                <LegalStuff/>
              </Col>
              <Col md={4}>
                <OtherStuff/>
              </Col>
            </Row>
          </Grid>
        </Page.Foot>
      </Page>
    )
  }
}
```


## Use ES Modules

This package also comes with the source and an ES variation.  Instead of

```jsx
import Page from '@qc/react-page'
```

use

```jsx
import Page from '@qc/react-page/es'
```

or

```jsx
import Page from '@qc/react-page/src'
```

to import the component.

If you do this, then you will need to be sure to transpile the code to a syntax
compatible with the browsers you plan to support.

The source is using object spread syntax.  In order to transpile it with
[babel], you must include the [object spread transform
plugin][babel-obj-sprd-txm].


## Importing Only the Components Needed

Use only the import statements needed.

```jsx
import Page from '@qc/react-page/lib/Page'
import PageHead from '@qc/react-page/lib/PageHead'
import PageBody from '@qc/react-page/lib/PageBody'
import PageSidebar from '@qc/react-page/lib/PageSidebar'
import PageFoot from '@qc/react-page/lib/PageFoot'
```

```jsx
import Page from '@qc/react-page/es/Page'
import PageHead from '@qc/react-page/es/PageHead'
import PageBody from '@qc/react-page/es/PageBody'
import PageSidebar from '@qc/react-page/es/PageSidebar'
import PageFoot from '@qc/react-page/es/PageFoot'
```

```jsx
import Page from '@qc/react-page/src/Page'
import PageHead from '@qc/react-page/src/PageHead'
import PageBody from '@qc/react-page/src/PageBody'
import PageSidebar from '@qc/react-page/src/PageSidebar'
import PageFoot from '@qc/react-page/src/PageFoot'
```


## Maintainers

- [Danny Hurlburt](https://github.com/dhurlburtusa)


## License

ISC


[babel]: https://babeljs.io/
[babel-obj-sprd-txm]: https://babeljs.io/docs/plugins/transform-object-rest-spread/
[coverage-image]: https://coveralls.io/repos/github/hypersoftllc/qc-react-page/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/hypersoftllc/qc-react-page?branch=master
[downloads-image]: http://img.shields.io/npm/dm/@qc/react-page.svg
[downloads-url]: http://npm-stat.com/charts.html?package=@qc/react-page
[license-image]: http://img.shields.io/npm/l/@qc/react-page.svg
[license-url]: LICENSE
[package-url]: https://npmjs.org/package/@qc/react-page
[npm-badge-png]: https://nodei.co/npm/@qc/react-page.png?downloads=true&stars=true
[whatwg]: https://whatwg.org/
[whatwg-headings-sections]: https://html.spec.whatwg.org/multipage/sections.html#headings-and-sections
[whatwg-outline]: https://html.spec.whatwg.org/multipage/sections.html#outlines
[whatwg-semantics]: https://html.spec.whatwg.org/multipage/dom.html#semantics-2
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-react-page.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-react-page
