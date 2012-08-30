---
layout: post
title: GWSAntDroid Progress
description: Progress on GWSAntDroid build system.
tagline: I haz builds
categories: blog
tags: [java, android, ant]
---

Made some progress on the GWSAntDroid build system. Most of the stuff is in place 
such as codeqa targets, build logic, ndkbuild feature, js/css obfuscation on product 
release for those projects that have a web component.

The next steps are finish the doclava templates, do some test project build types to 
verify feature operations and than wire up the javamonkey feature set.

# Things Learned Thus Far

Its very hard to have one aspect of a build system relying upon a SDK install as the 
library jar dependency system. It results in a lot more build logic and build boilerplate 
code. I wish Google would just pick up the IVY ant task and submit the artifacts to the Maven2
Central.

Its easier to create new internal targets for added things like codeqa than to rely upon the 
pre and post targets that Google gave us.  Why? Most IDEs have ANT target view outlines so 
its easier for every one to use that outline to go to a target to change rather than a huge 
post compile or pre build target.


