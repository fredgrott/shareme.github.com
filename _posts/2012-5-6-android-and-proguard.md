---
layout: post
title: Android and Proguard
tagline: guarding like a pro
description: I describe how to use the new way of proguard files and the common settings
categories: blog
tags: [android, proguard, java]
---

With the recent release of new android tools in SDK update in February Google changed how the proguard
configuration files are set up in a project to improve the build of android applications. Since some of the
proguard configuration file settings changed with that update it might be a good time to review them.

## Default set of Proguard Rules

Google has put a default set of proguard rules in the SDK that is always used when you build and an
android application. This is not the one that appears in your project folder however, its the one located
in the libs sub-folder in the tools dir of SDk install.

### Optimization turned off by default

Hold it! Before you jump, the Google Engineer reasoning is that because DEX now preforms more 
optimization and preverify steps and because it does not like the proguard optimization that this
setting can be left off.  If you disagree with that aspect, for example lets say you have an 
application port that is only running on android 1.6 and want that feature turned on you have to 
change this file and enable it by uncommenting the setting.

### Library default settings 

The only libraries that are set as far as using proguard in android application builds is the three
support libraries and the licensing library. Any other libraries in the google folder of the extras
sub-directory in your SDK install that you may be using might need a proguard setting in the
proguard configuration file in the project folder.

### How to Enable Proquard in the new build setup

I will step you through this with the comon settings if you were using most of the libs in the
extras folder inyour SDK install. In the project properties file in your project folder you will enable
proguard by:

<code>proguard.config=${sdk.dir}/tools/proguard/proguard-android.txt:proguard-project.txt</code>

and by:

<code>proguard.enabled=true</code>

The next step is to add some stuff for the libraries you are using:

<code><pre>
# admob, uncomment if using admob:
  -keep public class com.admob.android.ads.** {*;}
 # google analytics, uncomment to use:
 -keep class com.google.android.apps.analytics.PipelinedRequester$Callbacks
 # google inapp billing, uncomment to use:
  -keep class com.android.vending.billing.**
</pre>
</code>

Obviously, if you are using other stuff than you need to add it but you get the idea. The benefit of the 
change is Google is now managing the default proguard settings used and they are now proactively
catching bugs before the release of a SDK and thus we only have to set proguard for the 3d party 
libraries we might be using and any Webview Javascript Interface.