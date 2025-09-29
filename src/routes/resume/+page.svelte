<script lang="ts">
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

	// Data provided from the route loader
	let { data } = $props();
</script>

<!-- Resume main container with vertical spacing between sections -->
<div transition:blur class="flex flex-col gap-4">
	<!-- Work experience section -->
	<WorkExperience resume_work_experience={data.resume_work_experience} />

	<!-- Education history section -->
	<EducationHistory resume_education={data.resume_education} />

	<!-- Skills section -->
	<SkillSet
		resume_skill_set_language={data.resume_skill_set.resume_skill_language}
		resume_skill_set_coding_skill={data.resume_skill_set.resume_coding_skill}
		resume_skill_set_design_skill={data.resume_skill_set.resume_design_skill}
	/>

	<!-- Knowledge / expertise section -->
	<Knowledge resume_knowledge={data.resume_knowledge} />

	<!-- Services offered -->
	<MyServices resume_service={data.resume_services} />

	<!-- Clients / portfolio section -->
	<MyClients resume_clients={data.resume_clients} />
</div>

<!-- SEO Meta Tags -->
<MetaTags
	title={`${data.translation.first_name} ${data.translation.last_name} - ${m.resume()}`}
	titleTemplate="%s"
	description={`${data.translation.first_name} ${data.translation.last_name} . ${m.resume()}`}
	canonical="{import.meta.env.VITE_SITE_ADDRESS}/{currentLocale !== 'en'
		? `${currentLocale}/`
		: ''}resume"
	robots="all"
/>
