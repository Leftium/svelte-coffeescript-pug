<script lang="coffeescript">
  export name = null

  ## Counter sample based on https://svelte.dev/tutorial/reactive-statements
  count = 0
 
  ## Mark Svelte reactive CoffeeScript statements by escaping out to JavaScript.
  ## (Normally CoffeeScript syntax is incompatible with Svelte Reactive statements.)

  `$: {`  ## Start Svelte reactive block.
  if count >= 10
    alert 'count is dangerously high!'
    count = 9
  `}`     ## End reactive block.

  handleClick = () ->
    count += 1
</script>

<template lang="pug">
  main
    h1 Hello {name}!
    p.
      Visit the #[a(href='https://svelte.dev/tutorial') Svelte tutorial]
      to learn how to build Svelte apps.

    // How reactive buttons are done in Svelte + Pug.
    // Note CoffeeScript cannot be used here.
    button(on:click='{handleClick}') Clicked {count} {count === 1 ? 'time' : 'times'}
</template>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
