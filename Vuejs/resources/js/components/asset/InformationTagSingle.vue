<template>
	<div class="container">
		<div class="row">
			<h2>{{ tagData.name }} <span>______________</span></h2>
			<table class="table">
			  <thead>
			    <tr>
			      <th scope="col">{{ tagData.posts.length }}</th>
			      <th scope="col">{{ tagData.questions.length }}</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>Posts</td>
			      <td>Questions</td>
			    </tr>
			  </tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			'tagData'
		],

		data() {
			return {
			}
		}
	}
</script>