---
layout: post
title: Github Jekyll Base Url
tagline: your bases belong to us
description: Describe how github gh-pages use base url an durl
categories: blog
tags: [jekyll, github, gh-pages]
---

So you want to do a set of gh-pages for your project at Github. Yeah, the docs on base url are somewhat 
confusing. Okay we have some things when using Github gh-pages and Jekyll:

<ul>
<li>base url</li>
<li>url</li>
</ul>

First while your main site from your github user account maybe be this(for me):

[shareme.github.com](http://shareme.github.com)

a project of that username has gh-pages at that url as a base, the project name and an extra backslash.

In Jekyll/WEBrick when servering local the site-dot-base-underscore-url is always rendered as a backslash as
WEBrick will than server it correctly. On github's server system the site-dot-base-underscore-url will be
rendered as the base url for that gh-pages branch of that project which on the github system wil have that extra
backslash.

But we have two hrefs to worry about absolute and relative. The other configuration in your YML file is  the
url variable and it sets the base for you to use when you MANUALLY set absolute hrefs. Yes, you have to set 
MANUALLY the base url of boht absolute and relative hrefs.

Let me give an example, in all the feed pages that you may generate those require absolute hrefs. Thus you cannot use
the site-dot-base-underscore-url variable there but have to use the site-dot-url variable.  In the relative hrefs, 
namely all the hrefs in your html files in the website, you have to use the site-dot-base-underscore-url as the
varaible as the base to copose the hrefs.  For example, my navigation links are using the site-dot-base-underscore-url 
as the base url.

Remember, hrefs are not labeled as absolute or relative but in your gh-pages github site:

<ul>
<li>Absolute Links hrefs</li>
       <ul>
              <li>Links that are outbound to other sites</li>
              <li>Links in your xml feed pages</li>
        </ul>
<li>Relative links hrefs</lI>
         <ul>
              <li>inside your website links to other pages in the site<;i>
          </ul>
</ul>

So hopefully this clears up the confusion.
