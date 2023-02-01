<script>
  import '@skeletonlabs/skeleton/themes/theme-vintage.css';
  import '@skeletonlabs/skeleton/styles/all.css';
  import '../app.postcss';

import { AppShell } from '@skeletonlabs/skeleton';
</script>



<AppShell>
  <!--
  <svelte:fragment slot="header">
    <div class="grid h-screen place-items-center">Header</div>
  </svelte:fragment>

  <svelte:fragment slot="sidebarLeft">
    <div class="grid h-screen place-items-center">Sidebar Left</div>
  </svelte:fragment>

  <svelte:fragment slot="sidebarRight">
    <div class="grid h-screen place-items-center">Sidebar Right</div>
  </svelte:fragment>
  <svelte:fragment slot="pageHeader">
    <div class="grid h-screen place-items-center">Page Header</div>
  </svelte:fragment>
  -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
  <!--
  <svelte:fragment slot="pageFooter">
    <div class="grid h-screen place-items-center">Page Footer</div>
  </svelte:fragment>
  <svelte:fragment slot="footer">
    <div class="grid h-screen place-items-center">Footer</div>
  </svelte:fragment>
  -->
</AppShell>
