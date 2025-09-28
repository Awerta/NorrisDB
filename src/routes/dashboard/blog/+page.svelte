<script lang="ts">
	import type { PageServerData } from './$types';
	let { data }: { data: PageServerData } = $props();
</script>

{#snippet singlePost(blogPost)}
	<tr>
		<th>
			{blogPost.id}
		</th>
		<td>
			<div class="flex items-center gap-3">
				<div class="avatar">
					<div class="mask mask-squircle h-12 w-12">
						<img src={blogPost.image} alt={blogPost.title} />
					</div>
				</div>
				<div>
					<div>{blogPost.title}</div>
					<div class="text-sm opacity-50">
						slug:
						<span class="font-bold italic opacity-90">{blogPost.slug} </span>
					</div>
				</div>
			</div>
		</td>

		<td>{blogPost.category}</td>
		<th>
			<button class="btn btn-ghost btn-soft btn-xs">Edit</button>
			<button class="btn btn-error btn-soft btn-xs">Delete</button>
		</th>
	</tr>
{/snippet}
<div class="overflow-x-auto">
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<th>Title</th>
				<th>Category</th>
				<th>Action</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each data.allPostsData as blogPost}
				{@render singlePost(blogPost)}
			{/each}
		</tbody>
		<!-- foot -->
		<tfoot>
			<tr>
				<th></th>
				<th>Title</th>
				<th>Category</th>
				<th>Action</th>
				<th></th>
			</tr>
		</tfoot>
	</table>
</div>
