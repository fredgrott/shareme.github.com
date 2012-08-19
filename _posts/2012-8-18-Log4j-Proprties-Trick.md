---
layout: post
title: Log4j Properties Trick
description: Log4j Properties trick For Eclipse
tagline: Eclipse Quirky, no?
categories: blog
tags: [eclipse, java, android]
---

So I am using Log4j to more fully log my builds and the diagnostics.  But Eclipse is 
somewhat quirky in this area. Guess what the way is to get Eclipse to recognize the 
log4j.properties file?

Take your log4j.properties file and zip compress it. Now for the hack part of the trick,
rename it with a jar extension.  Now in your Eclipse Ant Preference under Runtime 
load that external jar into the ant classpath along of course with yor log4j jar.

Now you can me full use of the Log4j over SLF4J features of something like Log4ANT 
in your apache ANT build scripts.
