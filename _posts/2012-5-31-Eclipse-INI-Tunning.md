---
layout:post
title: Eclipse INI Tunning
tagline: your INI is not an Oracle outie
description: Eclipse ININ file tunning to speed up eclipse
categories: articles
tags: [eclipse, java, android, INI, jvm, IDE]
---

Part of being a new android developer is that imersion in using Eclipse and
not all the information is easy to find. To fine tune the speed of Eclipse
you have to modfiy and add some options to the Eclipse INI file. So lets
get you up to speed in completing that task.

# A typical Eclipse INI file

A typical Eclipse IDE INI file looks something like this:

<script src="https://gist.github.com/2846117.js?file=eclipse_typical.ini"></script>

Do you notice the repeated items? Eclipse p2 will add items to the Eclipse INI 
file and soemtimes goofs up, save a back up copy of your ini file and get
rid of the duplicate items first.

# Turn off Virus scanning of Workspace dirs

This is really true if you are on MS Windows, run off virus scanning on all 
your workspace directories and the Eclipse IDE installation folder.

# JVM Version

Udating and using the newest JVM not only protects use as far as security holes
but it alos gives us new options in GC. etc to tune and speed up Eclipse so
lets update our JVM. After typing the 

<code>
java -version
</code>

command in a terminal you should see the java version and if its not the most
recent version than you need to install the most recent version. 

# VM Optons

Okay, before going wild with this backup a copy of your Eclipse INI file just 
in case you goof it up the first time. The first step is to make sure that since
we will be using the latest VM options ot the latest JVM that is the JVM that 
Eclipse will boot up under.

# D Options

Any time you see a

<code>
-D
</code>

option its a command to the JVM to pass on an option to the application and 
the application in this case is the Eclipse IDE itself. Thus:

<code>
-Dosgi.requiredJavaVersion=1.7
</code>

tells the Eclipse IDE OSGI component that only bootup Eclipse using the ini file
using JVM 1.7 or higher. If you are on JVM 1.7 or higher change that like to mirror
using 1.7 now.

# Server option

The server option flag refers to which JVM client you are using either the
default which is client or server. The option command to pu in the INI file is:

<code>
-server
</code>

insert it right after the vmargs flag.

# Standard and Non-standard JVM options

Flags with X are standard JVM options and flags with XX are non-standard options.
Generally you set most if not all the standard X flags first since you know that 
they are stable from major version of JVM to next major version of JVM.

Than you will set the non standard flags last and it helps if do a small subset 
at a time boot up eclipse and make sure that it runs. 


# X Memory options

Now lets set up the minimum and maximum start up JVM memory sizes that 
Eclipse IDE will use. Xms is minimum(physical ram size/16) and 
Xmx is maximum(physical ram size/4). Thus for 4 gigs of physical ram, 
for example on a Mac Laptop, you would have:

<code>
-Xms326m
-Xmx812m
</code>

You will always want tomake sure that the setting for Xmx plus XXMaxPermSize
does not exceed your physical ram.




# X new generation size

Xmn is the new generatin size flag and generally likes:

<code>
-Xmn128m
</code>

insert it right before your JVM X memory option settings.

# X Thread stack size

Xss is the thread stack size setting flag and generallty you will set it to:

<code>
-Xss1m
</code>

insert it right after the Xmn setting.

# X GC flag setting

Okay now its time to pick a GC to use. But before we get to that we need to 
the method that the GC will use. I am using deterministic:

<code>
-Xgc:deterministic
-XpauseTarget:20
</code>

and I have set the GC pause to 20.

# Rest of the Non_standard Settings

The rest of the non-standard settings are:

<code>
-XX:PermSize=400M
-XX:MaxPermSize=500M
-XX:CompileThreshold=10
-XX:MaxGCPauseMillis=10
-XX:MaxHeapFreeRatio=70
-XX:+UnlockExperimentalVMOptions
-XX:+DoEscapeAnalysis
-XX:+UseG1GC
-XX:+UseFastAccessorMethods
-XX:+AggressiveOpts
</code>

The G1 GC is being used and the rest are performance options settings.

# The full eclipse ini file

The full eclipse ini file:

<script src="https://gist.github.com/2847361.js?file=full_eclipse_ini_file.ini"></script>


# Final Notes

The above is based on the JVM HotSpot and thus if you are using JRockit you 
might have to change one or more flag settings.
