<template>
	<main role="main" class="container">
      <!-- <h1 class="mt-5">List Mahasiswa</h1> -->
      <app-title :judul="nama" />
      <table class="table">
		  <thead>
		    <tr>
		      <th scope="col">id</th>
		      <th scope="col">Title</th>
		      <th scope="col">User Id</th>
		      <th scope="col">Aksi</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for='todo in todoList'>
		      <!-- <th scope="row"></th> -->
		      <td>{{todo.id}}</td>
		      <td>{{todo.title}}</td>
		      <td>{{todo.userId}}</td>
		      <td>
		      	<b-button class="btn btn-info" v-b-modal.modal-prevent-closing @click="edit(todo)">Edit</b-button>
		      	<!-- <button @click="edit(todo)" data-toggle="modal" data-target="#exampleModal" class="btn btn-info">Edit</button> -->

		      	<button class="btn btn-danger" @click='deletes(todo.id)'>Delete</button>
		      </td>
		    </tr>
		  </tbody>
		</table>
		<center>
			<button @click="getData('previous')">Previous</button>
			<button @click="getData('next')">Next</button>
		</center>

		<!-- Modal -->
			<b-modal
		      id="modal-prevent-closing"
		      ref="modal"
		      title="Update Title"
		      @ok="updateData(todoid)"
		      
		    >
		      <form ref="form" @submit.stop.prevent="handleSubmit">
		        <b-form-group
		          label="Title"
		          label-for="name-input"
		          invalid-feedback="Name is required"
		        >
		          <b-form-input
		            id="new_title"
		            v-model="new_title"
		            required
		          ></b-form-input>
		        </b-form-group>
		      </form>
		    </b-modal>
		
      
    </main>
</template>

<script>
	import Title from '../component/Title';

	export default{
		data: () =>{
			return {
				todoList: [],
				nama: 'List Data',
				start: 0,
				limit: 10,
				new_title: '',
				todoid: ''
			}
		},
		components: {
			'app-title': Title
		},
		methods: {
			getData(action){
				if(action=='next'){
					this.start = this.start + 10
				}else if(action=='previous'){
					this.start = this.start - 10
				}
				this.$http.get('https://jsonplaceholder.typicode.com/todos?_start='+this.start+'&_limit='+this.limit)
				  .then( (response) => {
				    // handle success
				    this.todoList = response.data;
				    console.log(response);
				  })
				  .catch((error) => {
				    // handle error
				    console.log(error);
				  })
				  .finally( () => {
				    // always executed
				  });
			},
			deletes(id){
				// alert(id)
				this.$http.delete('https://jsonplaceholder.typicode.com/todos/'+id)
				  .then( (response) => {
				    // handle success
				    // this.todoList = response.data;
				    console.log(response);
				  })
				  .catch((error) => {
				    // handle error
				    console.log(error);
				  })
				  .finally( () => {
				    // always executed
				  });
			},
			edit(todo){
				this.new_title = todo.title;
				this.todoid = todo.id;
			},
			updateData(todo){
				// alert(todo)
				 this.$http.put('https://jsonplaceholder.typicode.com/todos/'+todo)
				  .then( (response) => {
				    // handle success
				    // this.todoList = response.data;
				    console.log(response);
				    // this.$refs.modal.hide()
				  })
				  .catch((error) => {
				    // handle error
				    console.log(error);
				  })
				  .finally( () => {
				    // always executed
				  });
			}
		},
		mounted() {
			this.getData('');
		}
	}
</script>