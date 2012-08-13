---
layout: post
title: Build Steps
description: android build system imporovements
tagline: build me
categories: blog
tags: [android, java]
---

Okay, I have the first step in improving an android application build system in place.
I set up an ivy local repo. If you have never set up an ivy repo before there is a trick 
to publishing multiple modules with one project.

Your resolve block should have a file entry pointing to the  ivy-module xml file 
and your publish block should have a scrivypattern entry pointint to the ivy-module file.
You can view my Bitbucket project for that setup at:

[https://bitbucket.org/fredgrott/gwsandroidprojectlibs](https://bitbucket.org/fredgrott/gwsandroidprojectlibs)

Its also set up for Gradle or Buildr use as well.  The extra resolver field entry in the 
retrieve line to retreive them using the ivy ant task jar than will be set ot local and thus
you can retrieve the dependencies no  matter if you are online or not without any messy
having to remember what launch setting to use.

The next step is I am going to modify the build.template in the SDK to have some bootstrap 
ant build script code that sets up the ivy jar and the ant jars I use to verify an ant build system 
and than add the build script cod that verifies a build system before its allowed to proceed 
further.

The main reasons for that set of prevention and debugging is that we now have android application 
build set ups where we are executing multiple project builds either for testing or for those 
pesky android project libraries or we have a  multiple language build in the case where you might have 
C, jni, and java.



