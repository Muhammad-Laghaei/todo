<template>
  <div class="is-full" >
    <table class="table is-full mx-auto">
    <thead class="" >
      <tr>
        <th><abbr title="Position">#</abbr></th>
        <th>Task</th>
        <th><abbr title="Status">Status</abbr></th>
        <th><abbr title="Date">Date</abbr></th>
        <th><abbr title="Options">Options</abbr></th>
      </tr>
    </thead>
    <tbody class="" >
      <tr v-for=" (task,index) in descendingComparator()" :key="index" >
        <th>{{index}}</th>
        <td>{{task.taskName}}</td>
        <td>{{task.status}}</td>
        <td>{{ moment(task.date).locale('fa').format('jYYYY/jMM/jDD') }}</td>
        <td>buttns</td>
      </tr>
    </tbody>
  </table>
  <div class="columns mx-auto max-width " >
    <div class="column button pt-2"  v-for="number in data.length" :key="number" >{{ number }}</div>
  </div>
  </div>
</template>
<script>
import jMoment from 'jalali-moment';
 const vm ={
  name: "table",
  data(){
    return {
      data:[{taskName:'first',date:new Date(2023,1,17),status:''},{taskName:'first',date:new Date(2023,1,20),status:''},{taskName:'first',date:new Date(2023,1,15),status:''},{taskName:'first',date:new Date(2023,1,19),status:''},{taskName:'first',date:new Date(2023,1,18),status:''}],

    }
  },
  methods:{
    descendingComparator: function () {
      const sortedArray = this.data.sort(function(a,b){
        console.log(a);
  if (b['date'] < a['date']) {
    return -1;
  }
  if (b['date'] > a['date']) {
    return 1;
  }
  return 0;
      })
      return sortedArray
},
      moment:(date)=>jMoment(date,'YYYY/MM/DD')
  }
};

export default vm;
</script>
<style scoped>
.max-width{
  max-width: 40%;
}
.padding{
  padding: 0;
}
</style>
