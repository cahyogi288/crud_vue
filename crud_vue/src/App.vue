<template>
  <div>
    <app-header></app-header>
    <router-view />	
  </div>
</template>
<script>
	import Header from './component/Header';
	export default{
		components: {
			'app-header' : Header
		}
	}
</script>