<template>
	<div class="form-group">
        <multiselect 
        v-model="tagForm" 
        :options="tags" 
        :multiple="true" 
        :close-on-select="false"
        :clear-on-select="true" 
        :hide-selected="true"
        placeholder="Select Tags" 
        label="name"
        track-by="name">
        </multiselect>
        <!-- <has-error :form="form" field="tags"></has-error> -->
    </div>
</template>

<script>
	export default {
		props: ['value'],
		data() {
			return {
                 tagForm: this.value
			}
		},

        methods: {
            // loadTags() {
            //         axios.get(''+'/api/m/tags/all').then(({ data }) => (this.tags = data));
            // },
        },

        created() {
            // this.loadTags();
        }
	}
</script>