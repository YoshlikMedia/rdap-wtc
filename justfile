alias s := start
start:
	deno run --allow-all mod.ts

alias d := dev
dev:
	deno run --watch --allow-all mod.ts -- --server --http

alias f := fmt
fmt:
	deno fmt

alias fc := fmt-check
fmt-check:
	deno fmt --check

alias l := lint
lint:
	deno lint

alias c := compile
compile:
	deno compile --allow-all mod.ts

alias ca := cache
cache:
	deno cache ./deps.ts
