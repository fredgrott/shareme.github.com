---
layout: post
title: StopGap Android Build Mess
description: a stogap measure to the android build mess.
tagline: Engineers fallign down on the job.
categories: blog
tags:[android, java, groovy, gant, ivy]
---

Okay, I guess the interesting puzzle bug bit.  I am building a stopgap measure to the 
Android build mess. At this time I do not believe Google will adopt as they still have not reviewed 
my code to fix doclava version 1.0.5 and its somewhat approaching next year.

However, IVY dependency support is now working and in place. Someone, before me solved one 
half of the multi-variant builds feature that we all need and I borrowing his Gant solution and 
iterating more off his to add support for different AppStores. 

Someone had the idea to adjust the manifest label as the indicator of a different 
edition of an app with also the apk being renamed to reflect the edition.  I think that may 
work for different appstore edditions as well.

It will be at my bitbucket account(bitbucket.org/fredgrott) and the project name will be 
GWSGantDroid. It will be alpha for awhile with probably the full workign version in September.

# If You Are a Recruiter

If you are a recruiter and searching for an android developer, I will not believe that your firm is
interested unless someone from engineering at the hiring level or higher reviews the code. Its nothing against 
recruiters, its just that your word does not mean anything in the large scheme of things. My repo 
account links are on the side site menu.
 
 I prefer Chicago startups and conversing with co-founders and CTOs and engineers. I miss the 
 Chicago scene and would like to relocate there evenutally.  Due to my focus on Android I prefer 
 Android Developer opportunties. I would really prefer a Chicago startup that might need an 
 Android Developer.
 
 Sorry for that off topic rant, I am getting more recruiter inquiries now that I have turned off 
 searching for job opportunties on  my linkedin account than I did when I had that enabled. You migth 
 say I m somewhat tired of the standard recruiter shuck-and-jive.
 
 # Is it better than Gradle Android plugin?
 
 That I do not know as I am not trying to replace the Gradle Android plugin but I do think my different 
 way of implementing things might have some merits when compared against the Gradle Androdid plugin and 
 the SDk build scripts that Google came up with.
 
 The differences is I treat the Google SDK as non maven, non ivy repo for the android jar and other things and 
 only put the dependencies that should be under IVy control under IVY control. As far as project 
 layouts and build artifacts instead of supporting Groovy conventions I am adhering to the Google Android 
 SDK conventions insteead which is the opposite of the Gradle Android plugin implementation.
 
 I think the jury will be out until we see how fast I can update it with the next SDK tools update as opposed 
 to how fast Gradle Androdi plugin team updates their own plugin.
 
 
# What is working thus far?

I have the IVY dependency resolution and retrieval working and posts a retrieval/dependency set of 
reports in the bin folder.  Now for the fun part of rewriting the ant macros as groovy code. Project 
layout convention wise I put the jar dependencies in the ext-libs folder each under appropriate configuration 
such as doclet, javadoc, aptfactory, compile, etc which is of course marked to be ignored in the SCM by the gitignore file.

Not the best solution but was kind of forced when Google updated the ADT  plugi to synch the 
Eclipse IDE projec classpath container with the libs folder.

# Other StopGap Steps

Other stopgap steps is to take the Google Android SDK ant build scripts and modify them 
to support iVY dependency management so that we can use that now. That project will be named 
GWSAntDroid and also be under my bitbucket repo account. Main reasons for that is the 
Gradle Android plugin library support is somewhat minimal and the Gant examples I have seen 
do not support Android Library Projects so just forseeing that it might take some time 
beyond just a few days.

# Strange Choices

The strangest convention choice that Google has made was not the ADT change to have the Eclipse IDE
synch the libs folder with the project classpath container. The strangest convention that 
Google has chosen is to embed the ant project init in the ant script itself rather than 
an individual ant target. It makes it real hard to integrate new features into the build system.
