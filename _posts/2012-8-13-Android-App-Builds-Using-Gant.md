---
layout: post
title: Android App Builds Using Gant
description: Android App Builds Using Gant
tagline: Gant, you have to think russian to fire the missiles
categories: blog
tags: [android,. java]
---

So everyone knows the Android App build system is a mess.  Here are the problems with 
choosing to replace Ant:

# Groovy Gradle

Groovy is nice it has a lot stuff we could use for example hooks into dependency 
management. Groovy is java scripting so the syntax is the same. The problem is that 
Google adopted some convetions with the project layout and the Gradle Android 
plugin did not adpot them. So every time Google updates the ant tasks of the SDK we 
have two areas that the Gradle Android plugin has to update, one the conversion of the 
ant macro changes to groovy within the plugin and adjust if Google inserted any new 
project conventions.

# Apache Buildr

Its not bad, but its still in raw condition and you would have to translate ant macros to
Ruby script and Ruby is different than java. 

# EasyAnt

EasyANT is problematic because it forces to do ivy modules in xml as the build script. 
Not that the concept is bad itself but  there is a lack of IDE tooling to support as far as 
editing IVY module files such as code completion, etc.

# Groovy Gant

Pluses, it lacks the build lifecycle that Gradle has but has the ivy hooks and is straight 
groovy scripting which is very similar to java. Minuses, you still  have to translate the 
ant macros to groovy scripting. However, its under you control to maintain which is better 
than the Gradle Android plugin at least for my use case.


# Problems left to Solve

With the introduction to ADT 20 Google included a new feature of the Eclipse Android 
plugin having the lib sfolder synch with the project claspath. Perfect for beginning 
Android developers but it really messes it up for andvance developers using dependency 
management. Why?

Normally, you write something like a Maven pom file or and Apache IVY module file 
to handle project depedencies and additionally you set gitginore to ignore the 
library folder.  That way the library dependencies are managed under not SCM control but 
either Maven or IVY control.  The solution probably is to have IVY load the dependencies 
under their confiuration designation in an ext-libs folder and somehow compose a 
gant target that rewrites the Eclipse classpath metadata file to add the libs in the ext-libs 
folder to the project classpath.

The other problem is project layout set up an verification. When developing advance 
android projects you develop your own set project layout that contains more items than 
what the new project command of the ADT plugin or sdk tools provides. Thus we need 
a simple way to add that stuff to the project layout and verify it. Probalby the answer would 
be to convert all that stuff to IVY repo layout terms, ie org and module or if you will a 
two deep folder structure.

I would still have to re-create the folder layout in the project but I could retrieve all the 
items from IVY which reduces the errors due to forgetting to copy something or getting its
placement in the project layout wrong.

Than I have to extend the IVY module as in android development we not only have 
release, but we also have debug but what about different appstores? Or would it be 
better to store the published artifact under configuration names for debug, googleplay, 
amazonappstore, htcbaiduappstore, etc?

Once finished it still does not address other issues of the Google Android App 
build system. For example, to test on mulitple OS versions you have to manually 
launch some AVDs and than take the project which is compiled with the AndroidManifest 
set to the highest OS and adb push it to each AVD.  Its obvious an area that demands 
it be automated via the build script.