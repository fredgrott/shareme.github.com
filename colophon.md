---
layout: page
title: Colophon
header: A ColoWhat?
description: colophon
group: navigation
---

## How This Was Made

In publishing colophon is production notes and so these are production notes about how this site was
created. The basic tools are:

<ul>
<li>Ruby and WEBrick</li>
<li>Jekyll(Template engine), Liquid(layout engine)</li>
<li>YAML and Markdown</li>
<li>Twitter Bootstrap, Responsive Web Design</li>
<li>HTML5</li>
</ul>
I cover some of theJekyll/Liquid usage tricks in some blog posts:
{% for post in site.tags.colophon %}
 <h2>
        <a href="{{ post.url }}" rel="bookmark" title="Permanent link to ">{{ post.title }}</a>
    </h2>
    <h5><time>{{ post.date | date: '%B' }} {{ post.date | date: '%e' }}, {{ post.date | date: '%Y' }}</time></h5>
{% endfor %}

While I do use stuff from Jade's JekyllBootstrap, I have severely modified it to my needs and you can
fork it and replace my personal stuff with your stuff and re-use:

[MY Git repo of this site](http://github.com/shareme/shareme.github.com)

Its under Apache License 2.0, just if you use it change the personal information and credit and link
back to me.
