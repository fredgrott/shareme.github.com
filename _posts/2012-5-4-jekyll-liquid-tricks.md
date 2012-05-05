---
layout: post
title: Jekyll Liquid Tricks
tagline: no hyde incuded
description: Jekyll and Liquid tricks used ot build this blog site
categories: blog
tags: [colophon, jekyll, liquid, github]
---

Jekyll and Liquid documentation is sparse in some areas so this a short set of tricks and tips so that you 
can get a github blog up and running as fast as possible.

## Config

At times there will be a miss-match between your IDE yml parser andwhat Jekyll accepts. In the variable
value assign field you have to use single quotes to escape certain entties such as:
<code>
    !  # https
</code>
<b>baseurl</b> is actually stated as <code>base_url</code> and you do not include a backslash
when using it to produce full urls. You only use it to compose a page url(post urls already have it) and 
in forming the urls to your asset image files for example. 

In my example since my site is shareme.github.com my base_url is in fact the backslash as that way when you
run <code>jekyll --server</code> in the terminal from your base folder of the site it will handle the
urls correctly when WEBrick servers it to your browser.

## Jekyll Liquid parse errors

While Jekyll Liquid parse errors sometimes give the wrong line number in the terminal output the simple
solution is just to rexamine the file the error mentions at the block of stuff it hangs on. I found the 
error of not single quote escapping https in the config file using this technique.

## Liquid Logic

The easiest way to do things is to use the other stuff to organize before you use Liquid logic to
dynamically put stuff in. In case of this website it was using Jekyll categories to group posts between
the articles and blog categories and than use liquid to display the recent 10 in each group. It has a side benefit 
that all my coding articles on techniques get entered into the site feed that I submit to feed aggregators.

## Github

Some things to keep in mind when using Github gh-pages:
<ul>
     <li>Jekyll plugins are not enabled or allowed</li>
     <li>Unless you are uisng CNAME your base_url will always be a backslash</li>
     <li>Once you have site up for your main gh-page or a project page, change your project description to
     include the link(the edit screen accepts the  markdown syntax for links)</li>
</ul>







