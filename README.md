<p align="center"><h1 align="center">Release in celebration of 20 years of Uzinfocom</h1></p>

![Uzinfocom's 20s](./.github/assets/20.jpg)

# CCTLD/WTC

WHOIS server implemented with Deno/STD

## Getting Started

Download links:

SSH clone URL: ssh://git@git.jetbrains.space/uzinfocom/cctld/wtc.git

HTTPS clone URL: https://git.jetbrains.space/uzinfocom/cctld/wtc.git

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

## Prerequisites

What things you need to install the software and how to install them.

```
Shell (Mac, Linux):
$ curl -fsSL https://deno.land/install.sh | sh

PowerShell (Windows):
$ iwr https://deno.land/install.ps1 -useb | iex

Homebrew (Mac):
$ brew install deno

Chocolatey (Windows):
$ choco install deno

Scoop (Windows):
$ scoop install deno

Build and install from source using Cargo:
$ cargo install deno --locked
```

## Deployment

It's handy to have make installed on your system as all scripts were written
into Makefile

You have 2 ways of deploying:

- Compiling and Running
- Just running

In order to run, just run command `deno run --allow-all mod.ts`. Wise, you can
compile using command `deno compile --allow-all mod.ts` and then run compiled
executable just by typing `./wtc.ts`
