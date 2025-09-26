<script>
	// Resume sections as reusable components
	import WorkExperience from '$lib/resume/workExperience/workExperience.svelte';
	import EducationHistory from '$lib/resume/educationHistory/EducationHistory.svelte';
	import SkillSet from '$lib/resume/skillSet/SkillSet.svelte';
	import Knowledge from '$lib/resume/knowledge/Knowledge.svelte';
	import MyServices from '$lib/resume/myServices/MyServices.svelte';
	import MyClients from '$lib/resume/myClients/MyClients.svelte';

	import { m } from '$lib/paraglide/messages'; // localized messages (m) for multi-language text
	import { MetaTags } from 'svelte-meta-tags'; // SEO meta tag
	import { blur } from 'svelte/transition'; // Page transition for smooth fade-in
	import { getLocale } from '$lib/paraglide/runtime'; // get current locale

	// Current locale state (for links and localized strings)
	let currentLocale = $state(getLocale());
</script>

<!-- Resume main container with vertical spacing between sections -->
<div transition:blur class="flex flex-col gap-4">
	<!-- Work experience section -->
	<WorkExperience />

	<!-- Education history section -->
	<EducationHistory />

	<!-- Skills section -->
	<SkillSet />

	<!-- Knowledge / expertise section -->
	<Knowledge />

	<!-- Services offered -->
	<MyServices />

	<!-- Clients / portfolio section -->
	<MyClients />
</div>

<!-- SEO Meta Tags -->
<MetaTags
	title={`${m.name()} - ${m.resume()}`}
	titleTemplate="%s"
	description={`${m.name()} . ${m.resume()}`}
	canonical="{import.meta.env.VITE_SITE_ADDRESS}/{currentLocale !== 'en'
		? `${currentLocale}/`
		: ''}resume"
	robots="all"
/>
