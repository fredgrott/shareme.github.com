---
laytout: post
title: The Beginning of a Fix
tagline: its borken
description: Beginning Fixes to Android App Build System
categories: blog
tags: [android, java, buildsystems]
---

One of the problems, I think, with the android application build system is the 
unfinished mapping of concepts. Let me give you an example. In Android projects 
we have several project types.

I Google's world we have an App Project, An Instrumented Project, and An Android Library Project. 
Sounds simple right? That is part of the problem as only under certain limited conditions is 
that project type marked in an ANT properties file and as we know on studying Google's current 
Android App build system the ant setup task doe snto always execute with each build case.

My proposal as a first step is to mark a property iin local.properties for now that is the
variable to indicate project type. Unlike the isLibrary, its not set by the SDK.  This than will
free the developer to be more flexible in their own build scripts because now instead of having 
a delayed determination of project type in the pre-compile/pre-build target we can now determine 
the project type during the very beginning during the loading of ant property files.

What is the difference?  It somewhat puts Groovy Gradle, Buildr, and Apache ANT on equal footing 
as than the initialization setup logic is not hidden in an ANT target but someewhat at the beginnning 
of the build script.

Plus, in my proposal you can define new project types if needed. Say you find a new testing framework 
and need a new project type Gutitar UI Tesing, for example. Just set project.type in local properties 
and have your build logic handle it, nice and easy.

# Build System Progress

Well, I have determine how to use Apache IVY and started setting up setup repo projects for 
the ant task libs I use and a composite one for all the project libs. I finish uploading to 
bitbucket today. Nice and simple I git cloen the repo setup on the dev machine and run the 
build script which than sets up a local IVY repo at user home directory to use in my build scripts.

The next puzzle is I have a buildSYS folder than has the doclava javadoc templates and the codeqa
xsls and configurations. Thus, now we have a build system artifact that we need to store and 
maintain that does not fit the IVY or MAVEN dependency systems.

The ideal system eventually would be to put a template of the build script in this folder and have a
project setup script somehow grab it from wherever you have downloaded it to as a directory. As than 
I could simply change the SDK project setup script to setup my system each time in a project and 
do project setup that way instead of through the IDE.

The general idea here is automate as much as possible to prevent breakage and preventing
breakage helps ease of use and setting up good developer habits.And as a side benefit we get fast 
prototype iterations, this is why if you are a Chicago Startup you would want to obtain 
my services to produce an android application iteration or two as developer time savings
when I finally have this etup will be awesome.
