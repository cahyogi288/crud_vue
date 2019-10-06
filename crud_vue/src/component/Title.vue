<template>
	<h1>{{ judul }}</h1>
</template>

<script>
	export default{
		props: {
			judul: {
				// type: String
			}
		}
	}
</script>

<style scoped>
	h1 { color: #d54d7b; font-family: "Great Vibes", cursive; font-size: 65px; line-height: 160px; font-weight: normal; margin-bottom: 0px; margin-top: 40px; text-align: center; text-shadow: 0 1px 1px #fff; }
</style>