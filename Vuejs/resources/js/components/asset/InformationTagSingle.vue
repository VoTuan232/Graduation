<template>
	<div class="container">
		<h2>{{ tagData.name }} <span>______________</span></h2>
		<div class="row">
			<div class="col-sm-6">
				<div class="card" style="width: 100%;">
				  <div class="card-body">
				    <h5 class="card-title">{{ tagData.posts.length }}</h5>
				    <p class="card-text">Posts</p>
				  </div>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="card" style="width: 100%; margin-left: -30px;">
				  <div class="card-body">
				    <h5 class="card-title">{{ tagData.questions.length }}</h5>
				    <p class="card-text">Questions</p>
				  </div>
				</div>
			</div>
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