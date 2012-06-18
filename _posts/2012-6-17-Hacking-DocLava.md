---
layout: post
title: Hacking Doclava
tagline: LavaLamps not included
description: Hacking up doclava to enable embedding docs with doclava 1.0.5
categories: blog
tags: [android, java, doclava, doclet, javadoc, javadocs]
---

Okay, I got doclava 1.0.5 to correctly allow to embedd docs while doing javadocs, 
see my ActiveWallpaper site for pretty javadocs combined with use docs:

[ActiveWallpaper](http://fredgrott.bitbucket.org/activeWallpaper/index.html)

First, this is a fork of doclava done haste so do not go bothering the Google team 
that commits to doclava.  The ClearPage.java corrections are in my doclava fork:

[LavaLamp]('https://bitbucket.org/fredgrott/lavalamp')

The rest where I change the templates to account for that damn reference subfolder and backslash
are vewiable in the source of my ActiveWallpaper project under the buildSYS subfolders,
the gws.assets one:

[ActiveWallpaper]('https://bitbucket.org/fredgrott/activewallpaper')

# The ClearPage Hack

When changes were made between doclava 1.0.3 and doclava 1.0.5 somehow it got 
goofed up inthat you did not get a correct clearsilver toroot value. The syptoms were 
that you would get different results if you used toroot, toassets, or them combined.

It turns out its that pesky hard-wried subdir reference that is the problem. So I came up 
with a new way to compute toroot, it has been submitted to Google but it may not be 
the right approach. Here is what I came up with:

<script src="https://gist.github.com/2946683.js?file=ClearPAge.java"></script>

It is not the most elegant hack, but it works for now.

# To Use

Okay, so you want to use it.  Download LavaLamp and use the build script to
build you a copy of doclava.  Now, remember I did not change the default jds and stuff.
I did change my references to use toroot and than the assets subpath rather than
using toassets so you need to change that in some cs files.

The other changes you will be making is in your jd templates of packages, package, 
classes, and class. You need to add the reference subfolder and backslash in the 
path urls, it will be obvious where if you run a test javadoc generation on a sample
project as yu will get 404 errors for certain links.

Once you do that you will be able to generate nice project site dosc just like mine.