<script lang="ts">
	import { CONTENTS, TITLES } from '@/lib/constants';

	let { isAmp = false } = $props();
</script>

<ol class="contents">
	{#each CONTENTS as href (href)}
		<li>
			<a href="/dabt{isAmp ? '/amp' : ''}{href}">
				<span>{TITLES[href]}</span>
			</a>
		</li>
	{/each}
</ol>
