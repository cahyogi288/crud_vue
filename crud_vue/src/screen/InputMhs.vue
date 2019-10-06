<template>
	<main role="main" class="container">
      
      <app-title :judul="nama" />
      <form>
		  <div class="form-group">
		    <label for="exampleInputEmail1">Title</label>
		    <input type="text" v-model="title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputEmail1">Body</label>
		    <input type="text" v-model="body" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Body">
		  </div>
		  <!-- <div class="form-group form-check">
		    <input type="checkbox" class="form-check-input" id="exampleCheck1">
		    <label class="form-check-label" for="exampleCheck1">Check me out</label>
		  </div> -->
		  <button type="submit" @click="input($event)" class="btn btn-primary">Submit</button>
		</form>
      
    </main>
</template>

<script>
	import Title from '../component/Title';
	
	export default {
		data: ()=>{
			return{
				nama: 'Input Data',
				title: '',
				body: ''
			}
		},
		components: {
			'app-title': Title
		},
		methods: {
			input(e){
				e.preventDefault();
				this.$http.post('https://jsonplaceholder.typicode.com/todos', {
				    title: this.title,
				    body: this.body,
				    userId : 1
				  })
				  .then( (response) => {
				  	alert("Sukses")
				    console.log(response);
				  })
				  .catch( (error) => {
				    console.log(error);
				  });
				  this.title = '';
				  this.body = '';
				// console.log(this.body);
			}
		}
		
	}
</script>