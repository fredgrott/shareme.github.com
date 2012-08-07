---
layout: post
title: Broken Build Systems
tagline: if its broke break it again and again
description: Android Broken App Build Systems
categories: blog
tags: [android, apache ant, groovy gradle, apache buildr]
---

By now everyone has read and debated the Jake Wharton, the Android Build is Broken post:

[The Android Build is Broken](http://jakewharton.com/the-android-build-system-is-broken/)

Some important points might be:

1. Android Library Projects are special.
2. Google likes to have the sdk manage the sdk jars dependencies and 
   the Android Library Project dependencies.

I think the major take away is that if you adopt a practical approach of using apache Ivy
as the dependency protocol, if you will, than you should be able to transitiion from 
Apache ANT to say Gradle or Buildr.

I say Gradle and Buildr because currently there is no Python similar build framework that 
suports ant task libraries and Apache ANT like gradle and buildr. Hopefully, Google does not
 fprce a python choice on us.

I think its time to do two build scripts, one in Apache ANT and one in Groovy Gradle 
than compare feature sets and see which one wins as far as reducing the 
complexitiy down to easy automatic builds handling Androind Instrumetned testing, Cucumber Tests, and 
JavaMonkey/Skilu tests.

Thus, you might see some notes this week on Apache ANT build script techniques and Groovy 
Gradle build script techniques.


