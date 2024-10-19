<script>
  export let src, alt = '', className = '', aspect = '4x4', pixelated = false, role = '', fadeIn = true, loading = 'lazy'
  import { fade } from 'svelte/transition'

  const [width, height] = aspect.split('x')

  function handleSourceError(event) {
    event.target.onerror = null
    event.target.style.display = 'none'
  }

  function handleImgError(event) {
    event.target.onerror = null
    // Hide the <source> and <img> if image fails to load
    if (event.target.parentNode && event.target.parentNode.children.length > 1) {
      event.target.parentNode.children[0].srcset = ''
      event.target.parentNode.children[1].srcset = ''
    }
    event.target.style.display = 'none'
  }
</script>

{#if fadeIn}
<picture class={$$restProps.class || ''} in:fade|global>
  <source on:error={handleSourceError} srcset='{src}.webp' type='image/webp' />
  <img class='{className}' class:pixelated={pixelated} src='{src}.png' {loading} {width} {height} {alt} {role} on:error={handleImgError}/>
</picture>
{:else}
<picture class={$$restProps.class || ''}>
  <source on:error={handleSourceError} srcset='{src}.webp' type='image/webp' />
  <img class='{className}' class:pixelated={pixelated} src='{src}.png' {loading} {width} {height} {alt} {role} on:error={handleImgError}/>
</picture>
{/if}

<style lang="postcss">
  img.pixelated {
    image-rendering: pixelated;
  }
</style>
