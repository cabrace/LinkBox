<script>

  import themeStore  from '$lib/stores/themeStore.js'
    const {log} = console;
    /* import { themes } from '$lib/stores/themes.js' */
    /* themes.set(["forest", "black", "night", "wireframe"]) */
    let themes = $themeStore.list
    let selected;

  $: {
      $themeStore.selected = selected
      window.document.body.dataset.theme = selected
      console.log("$stor3 " + $themeStore.selected)
    }

  function toggle() {
      console.log(window.document.body.classList)
    }

</script>
<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-2">
    <select bind:value={selected} class="select select-primary w-full max-w-xs">
      {#each themes as theme}
      <option>{theme}</option>
      {/each}
    </select>
    <!-- <ul class="menu menu-horizontal px-1"> -->
      <!-- <li><a>Item 1</a></li> -->
      <!-- <li tabindex="0"> -->
        <!-- <a> -->
          <!-- Parent -->
          <!-- <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg> -->
        <!-- </a> -->
        <!-- <ul class="p-2 bg-base-100"> -->
          <!-- <li><a>Submenu 1</a></li> -->
          <!-- <li><a>Submenu 2</a></li> -->
        <!-- </ul> -->
      <!-- </li> -->
      <!-- <li><a>Item 3</a></li> -->
    <!-- </ul> -->
  </div>
</div>

